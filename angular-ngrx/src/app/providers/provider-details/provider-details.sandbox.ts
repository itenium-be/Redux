import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as store from "../../shared/store/store";
import { Observable } from "rxjs/internal/Observable";
import { Provider } from "../../shared/models/provider";
import { getProviderDetailsData } from "../../shared/store/store";
import { ProvidersService } from "../../shared/services/providers.service";
import { ActivatedRoute } from "@angular/router";
import { DetailLoadedAction, DetailLoadingAction, DetailLoadFailedAction } from "../../shared/store/actions/providerDetails.action";
import { catchError, take } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class ProviderDetailsSandbox {
  constructor(
    protected appState$: Store<store.GlobalState>,
    private providerService: ProvidersService,
    private route: ActivatedRoute
  ) {}

  providerDetails$: Observable<Provider> = this.appState$.pipe(select(getProviderDetailsData));

  LoadProviderDetails(): void {
    const providerReference = this.route.snapshot.params["ref"];
    this.appState$.dispatch(new DetailLoadingAction());
    this.providerService
      .getProvider(providerReference)
      .pipe(
        take(1),
        catchError((error) => {
          this.appState$.dispatch(new DetailLoadFailedAction(error));
          return throwError(error);
        })
      )
      .subscribe((response: Provider) => {
        this.appState$.dispatch(new DetailLoadedAction(response));
      });
  }
}
