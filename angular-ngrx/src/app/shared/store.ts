import { ActionReducerMap } from '@ngrx/store';
import { ProvidersState, reducer } from "../providers/providers.reducer";


/** GLOBAL Store State */
export interface GlobalState {
  providers: ProvidersState;
}


export const reducers: ActionReducerMap<GlobalState> = {
  providers: reducer,
};
