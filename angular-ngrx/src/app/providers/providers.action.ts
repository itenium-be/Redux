import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Provider, ProvidersFilter } from "./provider";


export const LOAD_PROVIDERS = '[Providers] Load Providers';
export const LOAD_PROVIDERS_SUCCESS = '[Providers] Load Providers Success';
export const LOAD_PROVIDERS_FAIL = '[Providers] Load Providers Fail';
export const ADDED = "[Provider] Added";

export const SET_FILTERS = '[Providers] Set Filters, Sorting, Paging';



export class LoadProvidersAction implements Action {
  readonly type = LOAD_PROVIDERS;
}
export class LoadProvidersSuccessAction implements Action {
  readonly type = LOAD_PROVIDERS_SUCCESS;
  constructor(public payload: Provider[]) { }
}
export class LoadProvidersFailAction implements Action {
  readonly type = LOAD_PROVIDERS_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class SetFiltersAction implements Action {
  readonly type = SET_FILTERS;
  constructor(public payload: ProvidersFilter) {}
}

export class AddedAction implements Action {
  readonly type = ADDED;
  constructor(public payload: Provider) {}
}

export type Actions =
  | LoadProvidersAction
  | LoadProvidersSuccessAction
  | LoadProvidersFailAction
  | SetFiltersAction
  | AddedAction;
