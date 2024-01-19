import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent, DefaultDirective, ByCategoryDirective } from '@nw/products-views';

@Component({
  standalone: true,
  imports: [CommonModule, ProductsListComponent, DefaultDirective, ByCategoryDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
