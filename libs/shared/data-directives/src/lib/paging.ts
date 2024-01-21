export type Paging = {
  pageSize: number;
  page: number;
};

export const DEFAULT_PAGING: Paging = { pageSize: 10, page: 0 };
