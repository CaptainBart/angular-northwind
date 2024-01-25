import { DestroyRef, Directive, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, combineLatest, switchMap } from 'rxjs';
import { ListComponent } from './list.component';
import { GetItemsOptions } from './get-items-options';

@Directive({
  standalone: true,
})
export abstract class ListDirective<T = unknown> implements OnInit {
  #list = inject(ListComponent<T>);
  #destroyRef = inject(DestroyRef);

  ngOnInit() {
    combineLatest([this.#list.paging$, this.#list.orderBy$])
      .pipe(
        switchMap(([paging, orderBy]) => this.getItems({ paging, orderBy })),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe((items) => (this.#list.items = items));
  }

  protected abstract getItems(options: GetItemsOptions<T>): Observable<T[]>;

  protected changeTotalCount(count: number) {
    this.#list.changeTotalCount(count);
  }
}
