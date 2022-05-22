import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { ProviderStore, ProviderState } from "./akita-store";

@Injectable({ providedIn: "root" })
export class ProviderQuery extends QueryEntity<ProviderState> {
  constructor(protected store: ProviderStore) {
    super(store);
  }
}
