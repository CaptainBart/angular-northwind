import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ListComponent } from './list.component';
import { MatSort, Sort } from '@angular/material/sort';

@Directive({
  selector: '[matSort]',
  standalone: true,
})
export class MatSortDirective<T = unknown> {
  #list = inject(ListComponent<T>);
  #sort = inject(MatSort);

  constructor() {
    this.sortChanged({ active: this.#sort.active, direction: this.#sort.direction });
    this.#sort.sortChange.pipe(takeUntilDestroyed()).subscribe((sort: Sort) => this.sortChanged(sort));
  }

  protected sortChanged(sort: Sort): void {
    this.#list.orderByChanged({ field: <'' | Extract<keyof T, string>>sort.active, direction: sort.direction });
  }
}
