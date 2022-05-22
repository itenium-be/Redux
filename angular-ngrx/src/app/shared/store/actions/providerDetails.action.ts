import { Provider } from '../../models/provider';
import { Action } from '@ngrx/store';

export const LOAD_DETAILS = '[Provider Details] Load Data';
export const LOAD_DETAILS_SUCCESS = '[Provider Details] Load Data Success';
export const LOAD_DETAILS_FAIL = '[Provider Details] Load Data Fail';

export const START_ADDING = '[Provider] StartAddingAction';
export const ADDED = '[Provider] Added';

export class DetailLoadingAction implements Action {
    readonly type = LOAD_DETAILS;
    constructor() { }
}
export class DetailLoadedAction implements Action {
    readonly type = LOAD_DETAILS_SUCCESS;
    constructor(public payload: Provider) { }
}
export class DetailLoadFailedAction implements Action {
    readonly type = LOAD_DETAILS_FAIL;
    constructor(error: any) { }
}
export class StartAddingAction implements Action {
    readonly type = START_ADDING;
    constructor(public payload: any) { }
}
export class AddedAction implements Action {
    readonly type = ADDED;
    constructor(public payload: Provider) { }
}

export type Actions
    = DetailLoadingAction
    | DetailLoadedAction
    | DetailLoadFailedAction
    | StartAddingAction
    | AddedAction;
