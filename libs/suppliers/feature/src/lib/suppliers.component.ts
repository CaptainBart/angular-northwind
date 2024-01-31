import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersTableComponent } from '@nw/suppliers-ui';
import { AllCSuppliersDirective } from '@nw/suppliers-data-directives';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SuppliersTableComponent,
    AllCSuppliersDirective,
  ],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css',
})
export class SuppliersComponent {}
