import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Provider } from '../../models/provider';

export const ActionTypes = {
    START_LOADING_PROVIDERS: '[Provider] StartLoadingProviders',
    PROVIDERS_LOADED: '[Provider] ProvidersLoaded',
    PROVIDERS_LOADING_FAILED: '[Provider] ProvidersLoadingFailed'
};

export class StartLoadingProvidersAction implements Action {
    type = ActionTypes.START_LOADING_PROVIDERS;
    constructor(public payload: Provider) { }
}

export class ProvidersLoadedAction implements Action {
    type = ActionTypes.PROVIDERS_LOADED;

    constructor(public payload: Array<Provider>) { }
}

export class ProvidersLoadingFailed implements Action {
    type = ActionTypes.PROVIDERS_LOADING_FAILED;
    constructor(public payload: HttpErrorResponse) { }
}

export type Actions
    = StartLoadingProvidersAction
    | ProvidersLoadedAction
    | ProvidersLoadingFailed;
