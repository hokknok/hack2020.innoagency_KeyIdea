import { QueryData } from './query-data';

export interface BackendQuery {
  action: string;
  query?: QueryData;
  canCache?: boolean;
  [key: string]: any;
}
