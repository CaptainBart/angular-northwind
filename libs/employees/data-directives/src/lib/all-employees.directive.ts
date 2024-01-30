import { Directive } from '@angular/core';
import { GetItemsOptions, ListDirective } from '@nw/shared-data-directives';
import { Employee, injectGetEmployees } from '@nw/employees-data-access';
import { Observable, map, tap } from 'rxjs';

@Directive({
  selector: '[bindAllEmployees]',
  standalone: true,
})
export class AllEmployeesDirective extends ListDirective<Employee> {
  readonly #getEmployees = injectGetEmployees();

  protected getItems(options: GetItemsOptions): Observable<Employee[]> {
    return this.#getEmployees({
      orderBy: options.orderBy.field,
      orderByDirection: options.orderBy.direction,
      top: options.paging.pageSize,
      skip: options.paging.pageSize * options.paging.page,
      count: true,
    }).pipe(
      tap((response) => this.changeTotalCount(response['@odata.count'] ?? response.value.length)),
      map((response) => response.value),
    );
  }
}
