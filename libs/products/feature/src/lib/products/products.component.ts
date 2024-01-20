import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from '@nw/products-ui';
import { DefaultDirective, ByCategoryDirective } from '@nw/products-data-directives';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ProductsTableComponent,
    DefaultDirective,
    ByCategoryDirective,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
