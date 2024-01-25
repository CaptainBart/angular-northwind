import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListComponent, MatSortDirective, MatPaginatorDirective } from '@nw/shared-data-directives';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Order } from '@nw/orders-data-access';

@Component({
  selector: 'nw-orders-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSortDirective,
    MatPaginatorDirective,
  ],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
  providers: [
    { provide: ListComponent<Order>, useExisting: forwardRef(() => OrdersTableComponent) },
  ],
})
export class OrdersTableComponent extends ListComponent<Order> {
  displayedColumns: Array<keyof Order> = ['OrderID', 'CustomerID', 'OrderDate', 'RequiredDate', 'ShipName', 'ShipAddress', 'ShipCity'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'OrderDate', direction: 'desc' };
  }
}
