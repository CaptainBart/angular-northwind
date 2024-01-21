import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderBy } from './order-by';

@Component({ template: '' })
export abstract class ListComponent<T = unknown> {
  initialOrderBy: OrderBy<T> = { field: '', direction: '' };
  #orderBy = new BehaviorSubject<OrderBy<T>>(this.initialOrderBy);

  @Input()
  items: T[] = [];

  orderBy$ = this.#orderBy.asObservable();

  orderByChanged(orderBy: OrderBy<T>): void {
    this.#orderBy.next(orderBy);
  }
}
