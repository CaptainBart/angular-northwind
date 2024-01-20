import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Product } from '@nw/products-data-access';
import { ListComponent } from '@nw/shared-data-directives';

@Component({
  selector: 'nw-products-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  providers: [{ provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsTableComponent) }],
})
export class ProductsTableComponent extends ListComponent<Product> {
  displayedColumns: string[] = ['ProductName', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock'];
}
