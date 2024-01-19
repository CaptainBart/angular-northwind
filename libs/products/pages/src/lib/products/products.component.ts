import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '@nw/products-views';
import { DefaultDirective, ByCategoryDirective } from '@nw/products-data-directives';

@Component({
  standalone: true,
  imports: [CommonModule, ProductsListComponent, DefaultDirective, ByCategoryDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
