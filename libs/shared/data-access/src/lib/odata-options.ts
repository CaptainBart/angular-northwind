import { HttpParams } from '@angular/common/http';

export interface ODataOptions<T = unknown> {
  orderBy?: '' | Extract<keyof T, string>;
  orderByDirection?: '' | 'asc' | 'desc';
  skip?: number;
  top?: number;
  count?: boolean;
}

export function formatODataParams<T = unknown>(options?: ODataOptions<T>, params: HttpParams = new HttpParams()): HttpParams {
  if (!options) {
    return params;
  }

  if (options.orderBy) {
    params = params.set('$orderby', [options.orderBy, options.orderByDirection ?? ''].join(' '));
  }

  if (options.top && options.top > 0) {
    params = params.set('$top', options.top);
  }

  if (options.skip && options.skip >= 0) {
    params = params.set('$skip', options.skip);
  }

  if (options.count) {
    params = params.set('$count', options.count);
  }

  return params;
}
