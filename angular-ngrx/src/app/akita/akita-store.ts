import { Injectable, Provider } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

export interface ProviderState extends EntityState<Provider> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "providers", resettable: true })
export class ProviderStore extends EntityStore<ProviderState> {
  constructor() {
    super();
  }
}
