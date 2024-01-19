import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ODataEnvelope } from './odata-envelope';
import { Product } from './product';

export type getProductsByCategory = (cagegoryId: number) => Observable<ODataEnvelope<Product[]>>;

export function injectGetProductsByCategory(): getProductsByCategory {
  const http = inject(HttpClient);
  return (cagegoryId: number) => http.get<ODataEnvelope<Product[]>>("https://services.odata.org/V4/Northwind/Northwind.svc/Products?$filter=CategoryID%20eq%20" + cagegoryId);
};