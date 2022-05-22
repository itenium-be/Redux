export interface Provider {
  code: string;
  name: string;
  active: boolean;
}

export interface ProvidersFilter {
  search: string;
  active: boolean;
}
