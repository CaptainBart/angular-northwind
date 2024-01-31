import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ODataEnvelope, ODataOptions, formatODataParams } from '@nw/shared-data-access';
import { Supplier } from './supplier';

export type GetSuppliersResponse = ODataEnvelope<Supplier[]>;
export type getSuppliers = (options?: ODataOptions<Supplier>) => Observable<GetSuppliersResponse>;

export function injectGetSuppliers(): getSuppliers {
  const http = inject(HttpClient);
  return (options?: ODataOptions<Supplier>) =>
    http.get<ODataEnvelope<Supplier[]>>('https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers', { params: formatODataParams(options) });
}
