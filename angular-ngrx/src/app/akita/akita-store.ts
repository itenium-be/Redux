import { Injectable } from "@angular/core";
import { EntityState, EntityStore, Store, StoreConfig } from "@datorama/akita";
import { Provider } from "../providers/provider";

export interface ProviderState extends EntityState<Provider> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "providers" })
export class ProviderStore extends EntityStore<ProviderState> {
  constructor() {
    super();
  }
}

// ------

export interface CustomProviderState {
  providers: Provider[],
  providerCode?: string;
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "providers", })
export class CustomProviderStore extends Store<CustomProviderState> {
  constructor() {
    super({providers: [], providerCode: null});
  }
}
