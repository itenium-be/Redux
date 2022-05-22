import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as store from "../../shared/store/store";
import * as providerActions from "../../shared/store/actions/providerDetails.action";
import { ProvidersService } from "../../shared/services/providers.service";
import { Router } from "@angular/router";
import { Provider } from "../../shared/models/provider";

export interface ProviderFormValue {
  name: string;
  code: string;
  status: boolean;
}

@Injectable()
export class AddProvidersSandbox {
  constructor(
    protected appState$: Store<store.GlobalState>,
    private providerService: ProvidersService,
    private router: Router
  ) {}

  addProvider(providerData: ProviderFormValue): void {
    const provider: Provider = {
      active: providerData.status,
      code: providerData.code,
      name: providerData.name,
    };

    this.appState$.dispatch(new providerActions.StartAddingAction(provider));

    this.providerService.addProvider(provider).subscribe(() => {
      this.appState$.dispatch(new providerActions.AddedAction(provider));
      this.providerService.loadProviders();
      this.router.navigate(["providers"]);
    });
  }
}
