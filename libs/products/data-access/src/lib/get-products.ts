import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ODataEnvelope, ODataOptions, formatODataParams } from '@nw/shared-data-access';
import { Product } from './product';

export type GetProductsResponse = ODataEnvelope<Product[]>;
export type getProducts = (options?: ODataOptions<Product>) => Observable<GetProductsResponse>;

export function injectGetProducts(): getProducts {
  const http = inject(HttpClient);
  return (options?: ODataOptions<Product>) => 
    http.get<GetProductsResponse>(
      'https://services.odata.org/V4/Northwind/Northwind.svc/Products',
      { params: formatODataParams(options) }
    )
};