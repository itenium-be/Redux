import * as ProviderActions from "../actions/providers.action";
import { Provider, ProvidersFilter } from "../../models/provider";
import { IPaging, ISorting } from "../../models/interfaces";

const _initialFilters: ProvidersFilter = { search: "", active: true };
const _initialPaging: IPaging = { page: 1, pageSize: 10 };
const _initialSorting: ISorting = { sortField: "", sortOrder: 1 };

export const initialFilters = (): ProvidersFilter => JSON.parse(JSON.stringify(_initialFilters));
export const initialPaging = (): IPaging => JSON.parse(JSON.stringify(_initialPaging));
export const initialSorting = (): ISorting => JSON.parse(JSON.stringify(_initialSorting));

export interface ProvidersState {
  paging: IPaging;
  sorting: ISorting;
  filters: ProvidersFilter;
  providers: Array<Provider>;
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ProvidersState = {
  paging: initialPaging(),
  sorting: initialSorting(),
  filters: initialFilters(),
  providers: null,
  loading: false,
  loaded: false,
};

export function reducer(state: ProvidersState = INITIAL_STATE, action: ProviderActions.Actions): ProvidersState {
  switch (action.type) {
    case ProviderActions.LOAD_PROVIDERS: {
      return Object.assign({}, state, { loading: true });
    }
    case ProviderActions.LOAD_PROVIDERS_SUCCESS: {
      const payload = (<ProviderActions.LoadProvidersSuccessAction>action).payload;

      return Object.assign({}, state, {
        providers: payload,
        loading: false,
        loaded: true,
      });
    }
    case ProviderActions.LOAD_PROVIDERS_FAIL: {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        providers: [],
      });
    }
    case ProviderActions.SET_FILTERS: {
      const payload = (<ProviderActions.SetFiltersAction>action).payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          search: payload.search ? payload.search : initialFilters().search,
          active: payload.active || initialFilters().active,
        },
      };
    }
    case ProviderActions.SET_SORTING: {
      const payload = (<ProviderActions.SetSortingAction>action).payload;
      const sorting = Object.assign({}, state.sorting);

      sorting.sortField = payload.sortField
        ? payload.sortField
        : initialSorting().sortField;
      sorting.sortOrder = payload.sortOrder
        ? payload.sortOrder
        : initialSorting().sortOrder;
      return Object.assign({}, state, { sorting: sorting });
    }
    case ProviderActions.SET_PAGING: {
      const payload = (<ProviderActions.SetPagingAction>action).payload;
      const paging = Object.assign({}, state.paging);
      paging.page = payload.page ? payload.page : initialPaging().page;
      paging.pageSize = payload.pageSize
        ? payload.pageSize
        : initialPaging().pageSize;
      return Object.assign({}, state, { paging: paging });
    }
    case ProviderActions.RESET_PAGE: {
      return Object.assign({}, state, {
        paging: initialPaging(),
        sorting: initialSorting(),
        filters: initialFilters(),
      });
    }

    default: {
      return state;
    }
  }
}

export const getProviders = (state: ProvidersState) => state.providers;
export const getProvidersPaging = (state: ProvidersState) => state.paging;
export const getProvidersSorting = (state: ProvidersState) => state.sorting;
export const getProvidersFilters = (state: ProvidersState) => state.filters;
export const getProvidersLoading = (state: ProvidersState) => state.loading;
export const getProvidersLoaded = (state: ProvidersState) => state.loaded;
