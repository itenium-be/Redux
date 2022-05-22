import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as providers from './reducers/providers.reducer';
import * as providerDetails from './reducers/providerDetails.reducer';
import * as activeProviders from './reducers/activeProviders.reducer';


/** GLOBAL Store State */
export interface GlobalState {
  providers: providers.ProvidersState;
  providerDetails: providerDetails.ProviderDetailsState;
  activeProviders: activeProviders.ActiveProvidersState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  providers: providers.reducer,
  providerDetails : providerDetails.reducer,
  activeProviders: activeProviders.reducer,
};



export const getProviderDetails = (state: GlobalState) => state.providerDetails;
export const getProviderDetailsData = createSelector(getProviderDetails, providerDetails.getProviderDetails);

export const getProvidersState = (state: GlobalState) => state.providers;
export const getProviders = createSelector(getProvidersState, providers.getProviders);
export const getProvidersPaging = createSelector(getProvidersState, providers.getProvidersPaging);
export const getProvidersSorting = createSelector(getProvidersState, providers.getProvidersSorting);
export const getProvidersFilters = createSelector(getProvidersState, providers.getProvidersFilters);
export const getProvidersLoading = createSelector(getProvidersState, providers.getProvidersLoading);
