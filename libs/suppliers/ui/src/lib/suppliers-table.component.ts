import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ListComponent, MatPaginatorDirective, MatSortDirective } from '@nw/shared-data-directives';
import { Supplier } from '@nw/suppliers-data-access';

@Component({
  selector: 'nw-suppliers-table',
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
  templateUrl: './suppliers-table.component.html',
  styleUrl: './suppliers-table.component.css',
  providers: [
    { provide: ListComponent<Supplier>, useExisting: forwardRef(() => SuppliersTableComponent) },
  ],
})
export class SuppliersTableComponent extends ListComponent<Supplier> {
  displayedColumns: (keyof Supplier)[] = ['SupplierID', 'CompanyName', 'ContactName', 'Address', 'City', 'Country'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'CompanyName', direction: 'asc' };
  }
}
