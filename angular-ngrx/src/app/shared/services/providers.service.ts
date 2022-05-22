import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { EMPTY, from, Observable, throwError } from "rxjs";
import { take, catchError, map } from "rxjs/operators";
import { Provider } from "../models/provider";
import { GlobalState } from "../store/store";
import * as ProvidersActions from "../store/actions/providers.action";

const data = [
  { code: "AWS", name: "Amazon Web Services", active: true },
  { code: "AZ", name: "Microsoft Azure", active: true },
  { code: "GCP", name: "Google Cloud Platform", active: true },
];


@Injectable({
  providedIn: "root",
})
export class ProvidersService {
  constructor(
    private readonly appState$: Store<GlobalState>,
    private router: Router,
  ) {}

  get(): Observable<Provider[]> {
    return from([[...data]]);
  }

  getProvider(ref: string): Observable<Provider> {
    return this.get().pipe(map(providers => providers.find(p => p.code === ref)));
  }

  addProvider(provider: Provider): Observable<void> {
    this.appState$.dispatch(new ProvidersActions.AddedAction(provider));
    data.push(provider);
    this.router.navigate(["providers"]);
    return EMPTY;
  }

  public loadProviders(): void {
    this.appState$.dispatch(new ProvidersActions.LoadProvidersAction());
    this.get()
      .pipe(
        take(1),
        catchError(error => {
          this.appState$.dispatch(new ProvidersActions.LoadProvidersFailAction(error));
          return throwError(error);
        })
      )
      .subscribe((response: Provider[]) => {
        this.appState$.dispatch(
          new ProvidersActions.LoadProvidersSuccessAction(response)
        );
      });
  }
}
