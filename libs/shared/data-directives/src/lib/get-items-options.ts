import { OrderBy } from './order-by';
import { Paging } from './paging';

export type GetItemsOptions<T = unknown> = {
  paging: Paging;
  orderBy: OrderBy<T>;
};
