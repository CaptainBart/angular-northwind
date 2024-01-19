import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ODataEnvelope } from './odata-envelope';
import { Product } from './product';

export type GetProductsResponse = ODataEnvelope<Product[]>;
export type getProducts = () => Observable<GetProductsResponse>;

export function injectGetProducts(): getProducts {
  const http = inject(HttpClient);
  return () => http.get<GetProductsResponse>("https://services.odata.org/V4/Northwind/Northwind.svc/Products");
};