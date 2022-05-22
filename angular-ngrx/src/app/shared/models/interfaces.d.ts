export interface IPaging {
  page?: number;
  pageSize?: number;
}

export interface ISorting {
  sortField?: string;
  sortOrder?: number;
}

declare interface IOption {
  value: any;
  label: string;
}
