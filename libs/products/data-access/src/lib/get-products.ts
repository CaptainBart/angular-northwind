import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GetProducts
{
    #http = inject(HttpClient);

    invoke(): Observable<GetProductsResponse> {
        return this.#http.get<GetProductsResponse>("https://services.odata.org/V4/Northwind/Northwind.svc/Products");
      }
}

export interface ODataEnvelope<T>
{
  value: T;
}

export interface Product
{
  ProductID: number;
  ProductName: string;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
}

export type GetProductsResponse = ODataEnvelope<Product[]>;