import { AfterViewInit, Component, DestroyRef, ViewChild, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Product } from '@nw/products-data-access';
import { ListComponent,  } from '@nw/shared-data-directives';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'nw-products-table',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  providers: [
    { provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsTableComponent) },
  ],
})
export class ProductsTableComponent extends ListComponent<Product> implements AfterViewInit {
  displayedColumns: string[] = ['ProductName', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock'];
  #destroyRef = inject(DestroyRef);

  constructor() {
    super();
    this.initialOrderBy = {field: "ProductName", direction: "asc"};
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.sort.sortChange.pipe(
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe(
      (sort: Sort) => this.orderByChanged({field: <"" | Extract<keyof Product, string>>sort.active, direction: sort.direction})
    );
  }
}
