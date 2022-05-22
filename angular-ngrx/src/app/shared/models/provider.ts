import { IOption } from "./interfaces";

export interface Provider {
    name: string;
    code: string;
    voucherTypes: number[];
    isActive: boolean;
}

export interface IProvidersFilter {
    search: string;
    filters: IProvidersFilters;
}

export interface IProvidersFilters {
    status: IOption;
}

export class ProvidersFilters {
    status: IOption;
    constructor(status: IOption) {
        this.status = status;
    }
}

export class ProvidersFilter implements IProvidersFilter {
    search: string;
    filters: IProvidersFilters;
    constructor(search: string, status: IOption) {
        this.search = search;
        this.filters = new ProvidersFilters(status);
    }
}
