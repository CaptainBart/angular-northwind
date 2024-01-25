import { Directive, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ListComponent } from './list.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Directive({
  selector: 'mat-paginator',
  standalone: true,
})
export class MatPaginatorDirective<T = unknown> implements OnInit {
  #list = inject(ListComponent<T>);
  #paginator = inject(MatPaginator);

  constructor() {
    this.#paginator.pageSizeOptions = [5, 10, 20, 50];
    this.#paginator.pageIndex = this.#list.initialPaging.page;
    this.#paginator.pageSize = this.#list.initialPaging.pageSize;

    this.#paginator.page
      .pipe(takeUntilDestroyed())
      .subscribe((pageEvent: PageEvent) => this.#list.changePaging({ page: pageEvent.pageIndex, pageSize: pageEvent.pageSize }));

    this.#list.totalCount$.pipe(takeUntilDestroyed()).subscribe((count) => (this.#paginator.length = count));
  }

  ngOnInit(): void {
    this.#list.changePaging({ page: this.#paginator.pageIndex, pageSize: this.#paginator.pageSize });
  }
}
