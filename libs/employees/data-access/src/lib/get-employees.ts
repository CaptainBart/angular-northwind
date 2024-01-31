import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ODataEnvelope, ODataOptions, formatODataParams } from '@nw/shared-data-access';
import { Employee } from './employee';

type EmployeeDto = Omit<Employee, 'BirthDate' | 'HireDate'> & {
  BirthDate: string;
  HireDate: string;
};

const mapDto = (dto: EmployeeDto): Employee => ({
  ...dto,
  BirthDate: new Date(dto.BirthDate),
  HireDate: new Date(dto.HireDate),
});

export type GetEmployeesResponse = ODataEnvelope<Employee[]>;
export type getEmployees = (options?: ODataOptions<Employee>) => Observable<GetEmployeesResponse>;

export function injectGetEmployees(): getEmployees {
  const http = inject(HttpClient);
  return (options?: ODataOptions<Employee>) =>
    http.get<ODataEnvelope<EmployeeDto[]>>('https://services.odata.org/V4/Northwind/Northwind.svc/Employees', { params: formatODataParams(options) })
      .pipe(
        map(response => ({
          ...response,
          value: response.value.map(mapDto),
        })),
      );
}
