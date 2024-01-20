import { HttpParams } from '@angular/common/http';

export interface ODataOptions<T=unknown> {
  orderBy: "" | Extract<keyof T, string>;
  orderByDirection: "" | "asc" | "desc";
}

export function formatODataParams<T=unknown>(options?: ODataOptions<T>, params: HttpParams = new HttpParams()): HttpParams {
  
  if (!options) {
    return params;
  }

  if(options.orderBy) {
    params = params.set('$orderby', [options.orderBy, (options.orderByDirection ?? '')].join(' '));
  }

  return params;
}