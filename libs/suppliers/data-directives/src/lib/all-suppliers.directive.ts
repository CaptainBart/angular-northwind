import { Directive } from '@angular/core';
import { GetItemsOptions, ListDirective } from '@nw/shared-data-directives';
import { Supplier, injectGetSuppliers } from '@nw/suppliers-data-access';
import { Observable, map, tap } from 'rxjs';

@Directive({
  selector: '[bindAllSuppliers]',
  standalone: true,
})
export class AllCSuppliersDirective extends ListDirective<Supplier> {
  readonly #getSuppliers = injectGetSuppliers();

  protected getItems(options: GetItemsOptions): Observable<Supplier[]> {
    return this.#getSuppliers({
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
