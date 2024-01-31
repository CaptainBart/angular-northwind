import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ListComponent, MatPaginatorDirective, MatSortDirective } from '@nw/shared-data-directives';
import { Customer } from '@nw/customers-data-access';

@Component({
  selector: 'nw-customers-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSortDirective,
    MatPaginatorDirective,
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css',
  providers: [
    { provide: ListComponent<Customer>, useExisting: forwardRef(() => CustomersTableComponent) },
  ],
  
})
export class CustomersTableComponent extends ListComponent<Customer> {
  displayedColumns: (keyof Customer)[] = ['CustomerID', 'CompanyName', 'ContactName', 'Address', 'City', 'Country'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'CompanyName', direction: 'asc' };
  }
}
