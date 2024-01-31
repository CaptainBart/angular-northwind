import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ODataEnvelope, ODataOptions, formatODataParams } from '@nw/shared-data-access';
import { Order } from './order';

type OrderDto = Omit<Order, 'OrderDate' | 'RequiredDate' | 'ShippedDate'> & {
  OrderDate: string;
  RequiredDate: string;
  ShippedDate: string;
};

const mapDto = (dto: OrderDto): Order => ({
  ...dto,
  OrderDate: new Date(dto.OrderDate),
  RequiredDate: new Date(dto.RequiredDate),
  ShippedDate: new Date(dto.ShippedDate),
});

export type GetOrdersResponse = ODataEnvelope<Order[]>;
export type getOrders = (options?: ODataOptions<Order>) => Observable<GetOrdersResponse>;

export function injectGetOrders(): getOrders {
  const http = inject(HttpClient);
  return (options?: ODataOptions<Order>) =>
    http.get<ODataEnvelope<OrderDto[]>>('https://services.odata.org/V4/Northwind/Northwind.svc/Orders', { params: formatODataParams(options) })
      .pipe(
        map(response => ({
          ...response,
          value: response.value.map(mapDto),
        })),
      );
}
