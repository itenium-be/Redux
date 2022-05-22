import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Provider, ProvidersFilter } from "../../models/provider";
import { IPaging, ISorting } from '../../models/interfaces';

/* ACTION DEFINITIONS */
export const LOAD_PROVIDERS = '[Providers] Load Providers';
export const LOAD_PROVIDERS_SUCCESS = '[Providers] Load Providers Success';
export const LOAD_PROVIDERS_FAIL = '[Providers] Load Providers Fail';
export const ADDED = "[Provider] Added";

export const SET_FILTERS = '[Providers] Set Filters';
export const SET_SORTING = '[Providers] Set Sorting';
export const SET_PAGING = '[Providers] Set Paging';
export const RESET_PAGE = '[Providers] Reset Filtering, Sorting and Paging';

/* ACTION CLASSES */
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

export class SetSortingAction implements Action {
  readonly type = SET_SORTING;
  constructor(public payload: ISorting) { }
}

export class SetPagingAction implements Action {
  readonly type = SET_PAGING;
  constructor(public payload: IPaging) { }
}

export class ResetPageAction implements Action {
  readonly type = RESET_PAGE;
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
  | SetSortingAction
  | SetPagingAction
  | ResetPageAction
  | AddedAction;
