import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@nw/products/data-access';
import { ListComponent } from '../products-list';

@Component({
  selector: 'nw-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [{provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsListComponent)}]
})
export class ProductsListComponent extends ListComponent<Product> {
}
