export type OrderDirection = '' | 'asc' | 'desc';

export interface OrderBy<T = unknown> {
  field: Extract<keyof T, string> | '';
  direction: OrderDirection;
}

export const EMPTY: OrderBy<unknown> = { field: '', direction: '' };
