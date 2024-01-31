import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from '@nw/orders-data-ui';
import { AllOrdersDirective } from '@nw/orders-data-directives';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    OrdersTableComponent,
    AllOrdersDirective,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
