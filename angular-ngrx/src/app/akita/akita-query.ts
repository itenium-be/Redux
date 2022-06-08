import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QueryEntity, Query } from "@datorama/akita";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Provider } from "../providers/provider";
import { ProviderStore, ProviderState, CustomProviderState, CustomProviderStore } from "./akita-store";

@Injectable({ providedIn: "root" })
export class ProviderQuery extends QueryEntity<ProviderState> {
  constructor(protected store: ProviderStore) {
    super(store);
  }
}



// --------



@Injectable({ providedIn: "root" })
export class CustomProviderQuery extends Query<CustomProviderState> {
  private providers$: Observable<Provider[]> = this.select(state => state.providers);

  providerId$: Observable<string | null> = this.route.queryParams.pipe(map(params => params['code'] || null));
  provider$: Observable<Provider> = combineLatest([this.providers$, this.providerId$]).pipe(
    map(([providers, providerCode]) => providers.find(provider => provider.code === providerCode))
  );

  constructor(protected store: CustomProviderStore, public route: ActivatedRoute) {
    super(store);
  }

  // This would typically be done in a component...
  setActiveProvider(code: string): void {
    this.store.update(state => ({...state, providerCode: code}));
  }
}
