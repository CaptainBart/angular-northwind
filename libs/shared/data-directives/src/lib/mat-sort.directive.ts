import { Directive, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ListComponent } from './list.component';
import { MatSort, Sort } from '@angular/material/sort';

@Directive({
  selector: '[matSort]',
  standalone: true,
})
export class MatSortDirective<T = unknown> implements OnInit {
  #list = inject(ListComponent<T>);
  #sort = inject(MatSort);

  constructor() {
    this.#sort.sortChange.pipe(takeUntilDestroyed()).subscribe((sort: Sort) => this.changeSort(sort));
  }

  ngOnInit(): void {
    this.changeSort({ active: this.#sort.active, direction: this.#sort.direction });
  }

  protected changeSort(sort: Sort): void {
    this.#list.changeOrderBy({ field: <'' | Extract<keyof T, string>>sort.active, direction: sort.direction });
  }
}
