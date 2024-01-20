import { DestroyRef, Directive, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { ListComponent } from './list.component';
import { OrderBy } from './order-by';

@Directive({
  standalone: true,
})
export abstract class ListDirective<T=unknown> implements OnInit {
  #list = inject(ListComponent<T>);
  #destroyRef = inject(DestroyRef);
  
  ngOnInit() {
    this.#list.orderBy$.pipe(
      switchMap((orderBy) => this.getItems(orderBy)),
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe(
      (items) => this.#list.items = items
    );
  }

  protected abstract getItems(orderBy: OrderBy<T>): Observable<T[]>;
}
