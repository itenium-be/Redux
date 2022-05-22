import { Injectable } from "@angular/core";
import { EMPTY, from, Observable, throwError } from "rxjs";
import { Provider } from "../models/provider";
import { take, catchError, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
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
  constructor(private readonly appState$: Store<GlobalState>) {}

  get(): Observable<Provider[]> {
    return from([[...data]]);
  }

  getProvider(ref: string): Observable<Provider> {
    return this.get().pipe(map(providers => providers.find(p => p.code === ref)));
  }

  addProvider(provider: Provider): Observable<void> {
    data.push(provider);
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
