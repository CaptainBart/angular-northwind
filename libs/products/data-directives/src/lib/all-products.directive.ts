import { Directive } from '@angular/core';
import { GetItemsOptions, ListDirective } from '@nw/shared-data-directives';
import { Product, injectGetProducts } from '@nw/products-data-access';
import { Observable, map, tap } from 'rxjs';

@Directive({
  selector: '[bindAllProducts]',
  standalone: true,
})
export class AllProductsDirective extends ListDirective<Product> {
  readonly #getProducts = injectGetProducts();

  protected getItems(options: GetItemsOptions): Observable<Product[]> {
    return this.#getProducts({
      orderBy: options.orderBy.field,
      orderByDirection: options.orderBy.direction,
      top: options.paging.pageSize,
      skip: options.paging.pageSize * options.paging.page,
      count: true,
    }).pipe(
      tap(response => this.changeTotalCount(response['@odata.count'] ?? response.value.length)),
      map(response => response.value),
    );
  }
}
