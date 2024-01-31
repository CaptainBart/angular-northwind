import { Directive } from '@angular/core';
import { GetItemsOptions, ListDirective } from '@nw/shared-data-directives';
import { Customer, injectGetCustomers } from '@nw/customers-data-access';
import { Observable, map, tap } from 'rxjs';

@Directive({
  selector: '[bindAllCustomers]',
  standalone: true,
})
export class AllCustomersDirective extends ListDirective<Customer> {
  readonly #getCustomers = injectGetCustomers();

  protected getItems(options: GetItemsOptions): Observable<Customer[]> {
    return this.#getCustomers({
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
