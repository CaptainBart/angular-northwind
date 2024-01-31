import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from '@nw/employees-ui';
import { AllEmployeesDirective } from '@nw/employees-data-directives';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    EmployeesTableComponent,
    AllEmployeesDirective,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {}
