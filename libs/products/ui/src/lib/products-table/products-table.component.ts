import { AfterViewInit, Component, DestroyRef, ViewChild, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Product } from '@nw/products-data-access';
import { ListComponent, MatSortDirective } from '@nw/shared-data-directives';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'nw-products-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSortDirective,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  providers: [
    { provide: ListComponent<Product>, useExisting: forwardRef(() => ProductsTableComponent) },
  ],
})
export class ProductsTableComponent extends ListComponent<Product> implements AfterViewInit {
  #destroyRef = inject(DestroyRef);
  displayedColumns: Array<keyof Product> = ['ProductName', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super();
    this.initialOrderBy = { field: 'ProductName', direction: 'asc' };
  }

  ngAfterViewInit(): void {
    this.changePaging({ page: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
    this.paginator.page
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((pageEvent: PageEvent) => this.changePaging({ page: pageEvent.pageIndex, pageSize: pageEvent.pageSize }));

    this.totalCount$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((count) => (this.paginator.length = count));
  }
}
