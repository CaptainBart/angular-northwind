import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ODataEnvelope, ODataOptions, formatODataParams } from '@nw/shared-data-access';
import { Customer } from './customer';

export type GetCustomersResponse = ODataEnvelope<Customer[]>;
export type getCustomers = (options?: ODataOptions<Customer>) => Observable<GetCustomersResponse>;

export function injectGetCustomers(): getCustomers {
  const http = inject(HttpClient);
  return (options?: ODataOptions<Customer>) =>
    http.get<GetCustomersResponse>('https://services.odata.org/V4/Northwind/Northwind.svc/Customers', { params: formatODataParams(options) });
}
