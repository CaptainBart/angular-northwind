import { OrderBy } from './order-by';
import { Paging } from './paging';

export interface GetItemsOptions<T = unknown> {
  paging: Paging;
  orderBy: OrderBy<T>;
}
