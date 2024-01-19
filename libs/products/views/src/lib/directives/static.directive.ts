import { Directive, inject } from '@angular/core';
import { ListComponent } from '../products-list';
import { Product } from '@nw/products/data-access';

@Directive({
  selector: '[nwStatic]',
  standalone: true,
})
export class StaticDirective {
  private readonly list = inject(ListComponent<Product>);

  constructor() {
    this.list.items = [{
      "ProductID": 1,
      "ProductName": "Chai",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "10 boxes x 20 bags",
      "UnitPrice": 18,
      "UnitsInStock": 39,
      "UnitsOnOrder": 0,
      "ReorderLevel": 10,
      "Discontinued": true
    }];
  }
}
