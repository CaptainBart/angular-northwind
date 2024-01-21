export interface ODataEnvelope<T> {
  '@odata.context'?: string;
  '@odata.count'?: number;
  value: T;
}
