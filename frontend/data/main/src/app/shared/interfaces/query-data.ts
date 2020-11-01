export interface QueryData {
  sort?: Record<string, 'asc' | 'desc'>;
  filter?: Record<string, any>;
  navigation?: {
    offset?: number;
    limit?: number;
    page?: number;
  };
}
