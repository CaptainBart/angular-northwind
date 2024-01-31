import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ListComponent, MatPaginatorDirective, MatSortDirective } from '@nw/shared-data-directives';
import { Employee } from '@nw/employees-data-access';

@Component({
  selector: 'nw-employees-table',
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
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.css',
  providers: [
    { provide: ListComponent<Employee>, useExisting: forwardRef(() => EmployeesTableComponent) },
  ],
})
export class EmployeesTableComponent  extends ListComponent<Employee> {
  displayedColumns: (keyof Employee)[] = ['EmployeeID', 'LastName', 'Title','BirthDate', 'HireDate'];

  constructor() {
    super();
    this.initialOrderBy = { field: 'LastName', direction: 'asc' };
  }
}
