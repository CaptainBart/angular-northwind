import { Component, Input, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderBy, EMPTY } from './order-by';
import { Paging, DEFAULT_PAGING } from './paging';

@Component({ template: '' })
export abstract class ListComponent<T = unknown> {
  items = signal<T[]>([]);
  @Input({ alias: 'items' })
  set _items(value: T[]) {
    this.items.set(value);
  }
  
  initialOrderBy: OrderBy<T> = EMPTY;
  #orderBy = new BehaviorSubject<OrderBy<T>>(this.initialOrderBy);
  orderBy$ = this.#orderBy.asObservable();

  initialPaging: Paging = DEFAULT_PAGING;
  #paging = new BehaviorSubject<Paging>(this.initialPaging);
  paging$ = this.#paging.asObservable();

  #totalCount = new BehaviorSubject<number>(0);
  totalCount$ = this.#totalCount.asObservable();

  changeOrderBy(orderBy: OrderBy<T>): void {
    this.#orderBy.next(orderBy);
  }

  changePaging(paging: Paging): void {
    this.#paging.next(paging);
  }

  changeTotalCount(count: number) {
    this.#totalCount.next(count);
  }
}
