import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as store from "../../shared/store";
import * as ProvidersActions from "../providers.action";
import { getProviders, getProvidersPaging, getProvidersSorting, getProvidersFilters, getProvidersLoading } from "../../shared/store";
import { Provider, ProvidersFilter } from "../provider";
import { IPaging, ISorting } from "../../shared/interfaces";

@Injectable()
export class ProvidersSandbox {
  constructor(protected appState$: Store<store.GlobalState>) {}

  public GetProviders(): Observable<Array<Provider>> {
    return this.appState$.pipe(select(getProviders));
  }

  public IsLoading(): Observable<boolean> {
    return this.appState$.pipe(select(getProvidersLoading));
  }

  public GetPaging(): Observable<IPaging> {
    return this.appState$.pipe(select(getProvidersPaging));
  }

  public UpdatePaging(paging: IPaging) {
    this.appState$.dispatch(new ProvidersActions.SetPagingAction(paging));
  }

  public GetSorting(): Observable<ISorting> {
    return this.appState$.pipe(select(getProvidersSorting));
  }

  public UpdateSorting(sorting: ISorting) {
    this.appState$.dispatch(new ProvidersActions.SetSortingAction(sorting));
  }

  public GetFilters(): Observable<ProvidersFilter> {
    return this.appState$.pipe(select(getProvidersFilters));
  }

  public UpdateFilters(filters: ProvidersFilter) {
    this.appState$.dispatch(new ProvidersActions.SetFiltersAction(filters));
  }

  public ResetPage() {
    this.appState$.dispatch(new ProvidersActions.ResetPageAction());
  }
}
