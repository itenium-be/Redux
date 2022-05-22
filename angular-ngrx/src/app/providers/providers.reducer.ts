import * as ProviderActions from "./providers.action";
import { Provider, ProvidersFilter } from "./provider";
import { IPaging, ISorting } from "../shared/interfaces";


export interface ProvidersState {
  paging: IPaging;
  sorting: ISorting;
  filters: ProvidersFilter;
  providers: Array<Provider>;
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ProvidersState = {
  paging: { page: 1, pageSize: 10 },
  sorting: { sortField: "", sortOrder: 1 },
  filters: { search: "", active: true },
  providers: null,
  loading: false,
  loaded: false,
};

export function reducer(state: ProvidersState = INITIAL_STATE, action: ProviderActions.Actions): ProvidersState {
  switch (action.type) {
    case ProviderActions.LOAD_PROVIDERS:
      return {...state, loading: true };

    case ProviderActions.LOAD_PROVIDERS_SUCCESS:
      return {...state, providers: action.payload, loading: false, loaded: true };

    case ProviderActions.LOAD_PROVIDERS_FAIL:
      return {...state, loading: false, loaded: false, providers: []};

    case ProviderActions.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload.search || INITIAL_STATE.filters.search,
          active: action.payload.active || INITIAL_STATE.filters.active,
        },
      };

    case ProviderActions.ADDED:
      return { ...state, providers: state.providers.concat([action.payload]) };

    default:
      return state;
  }
}
