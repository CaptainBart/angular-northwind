export type OrderDirection = '' | 'asc' | 'desc';

export type OrderBy<T = unknown> = {
  field: Extract<keyof T, string> | '';
  direction: OrderDirection;
};
