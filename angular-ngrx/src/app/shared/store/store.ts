import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as providers from './reducers/providers.reducer';


/** GLOBAL Store State */
export interface GlobalState {
  providers: providers.ProvidersState;
}


export const reducers: ActionReducerMap<GlobalState> = {
  providers: providers.reducer,
};


export const getActiveProviders = (state: GlobalState) => state.providers.providers.filter(x => x.active);


export const getProvidersState = (state: GlobalState) => state.providers;
export const getProviders = createSelector(getProvidersState, providers.getProviders);
export const getProvidersPaging = createSelector(getProvidersState, providers.getProvidersPaging);
export const getProvidersSorting = createSelector(getProvidersState, providers.getProvidersSorting);
export const getProvidersFilters = createSelector(getProvidersState, providers.getProvidersFilters);
export const getProvidersLoading = createSelector(getProvidersState, providers.getProvidersLoading);
