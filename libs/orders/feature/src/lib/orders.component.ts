import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from '@nw/orders-data-ui';
import { DefaultDirective } from '@nw/orders-data-directives';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    OrdersTableComponent,
    DefaultDirective,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
