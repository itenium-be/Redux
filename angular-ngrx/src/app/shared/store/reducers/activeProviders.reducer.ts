import * as ProvidersActions from '../actions/activeProviders.action';
import { ProvidersLoadingFailed } from '../actions/activeProviders.action';
import { Provider } from '../../models/provider';


/** Array of Providers */
export interface ActiveProvidersState {
    providers: Provider[];
}

const INITIAL_STATE: ActiveProvidersState = {
    providers: null
};

export function reducer(state: ActiveProvidersState = INITIAL_STATE, action: ProvidersActions.Actions) {
    switch (action.type) {
        case ProvidersActions.ActionTypes.PROVIDERS_LOADED:
            return Object.assign({}, state, { providers: action.payload });

        case ProvidersActions.ActionTypes.PROVIDERS_LOADING_FAILED:
            console.error('Error getting data - ' + (<ProvidersLoadingFailed>action).payload.statusText);
            return state;

        default:
            return state;
    }
}
export const getActiveProviders = (state: ActiveProvidersState) => state.providers;
