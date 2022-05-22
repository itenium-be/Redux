import { Provider } from '../../models/provider';
import * as providerDetailsInfoActions from '../actions/providerDetails.action';

export interface ProviderDetailsState {
    providerDetails: Provider;
    loading: boolean;
    loaded: boolean;
    adding: boolean;
}

const INITIAL_STATE: ProviderDetailsState = {
    providerDetails: null,
    loading: false,
    loaded: false,
    adding: false
};

export function reducer(state: ProviderDetailsState = INITIAL_STATE, action: providerDetailsInfoActions.Actions): ProviderDetailsState {
    switch (action.type) {
        case providerDetailsInfoActions.LOAD_DETAILS: {
            return Object.assign({}, state, { providerDetails: null, loading: true });
        }

        case providerDetailsInfoActions.LOAD_DETAILS_SUCCESS: {
            const payload = (<providerDetailsInfoActions.DetailLoadedAction>action).payload;
            return Object.assign({}, state, {
                providerDetails: payload,
                loading: false,
                loaded: true,
            });
        }

        case providerDetailsInfoActions.LOAD_DETAILS_FAIL: {
            return Object.assign({}, state, { loading: false, loaded: false, providerDetails: null });
        }

        case (providerDetailsInfoActions.START_ADDING): {
            return Object.assign({}, state, { saving: true });
        }
        case (providerDetailsInfoActions.ADDED): {
            const provider = Object.assign({}, state.providerDetails, action.payload);
            return Object.assign({}, state, {providerDetails: provider, adding: false});
        }
        default: {
            return state;
        }
    }
}

export const getProviderDetails = (state: ProviderDetailsState) => state.providerDetails;
