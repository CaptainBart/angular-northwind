import { Directive } from '@angular/core';
import { ListDirective, OrderBy } from '@nw/shared-data-directives';
import { Product, injectGetProducts } from '@nw/products-data-access';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[nwDefault]',
  standalone: true,
})
export class DefaultDirective extends ListDirective<Product> {
  private readonly getProducts = injectGetProducts();

  protected getItems(orderBy: OrderBy<Product>): Observable<Product[]> {
    return this.getProducts({ orderBy: orderBy.field, orderByDirection: orderBy.direction }).pipe(map((response) => response.value));
  }
}
