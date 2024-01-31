import { Directive } from '@angular/core';
import { GetItemsOptions, ListDirective } from '@nw/shared-data-directives';
import { Order, injectGetOrders } from '@nw/orders-data-access';
import { Observable, map, tap } from 'rxjs';

@Directive({
  selector: '[bindAllOrders]',
  standalone: true,
})
export class AllOrdersDirective extends ListDirective<Order> {
  readonly #getOrders = injectGetOrders();

  protected getItems(options: GetItemsOptions): Observable<Order[]> {
    return this.#getOrders({
      orderBy: options.orderBy.field,
      orderByDirection: options.orderBy.direction,
      top: options.paging.pageSize,
      skip: options.paging.pageSize * options.paging.page,
      count: true,
    }).pipe(
      tap((response) => this.changeTotalCount(response['@odata.count'] ?? response.value.length)),
      map((response) => response.value),
    );
  }
}
