import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Product } from '@nw/products-data-access';
import { ListComponent, MatSortDirective } from '@nw/shared-data-directives';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'nw-products-table',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatSortDirective,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  providers: [
    { provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsTableComponent) },
  ],
})
export class ProductsTableComponent extends ListComponent<Product> {
  displayedColumns: Array<keyof Product> = ['ProductName', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'ProductName', direction: 'asc' };
  }
}
