import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Product } from '@nw/products-data-access';
import { ListComponent, MatSortDirective, MatPaginatorDirective } from '@nw/shared-data-directives';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'nw-products-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSortDirective,
    MatPaginatorDirective,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  providers: [
    { provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsTableComponent) },
  ],
})
export class ProductsTableComponent extends ListComponent<Product> {
  displayedColumns: (keyof Product)[] = ['ProductName', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'ProductName', direction: 'asc' };
  }
}
