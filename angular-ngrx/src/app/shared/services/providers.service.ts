import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Provider } from '../models/provider';
import { share, take, catchError, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GlobalState } from '../store/store';
import * as ProvidersActions from '../store/actions/providers.action';
import { OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProvidersService implements OnDestroy {

    private cancelLoadProviders = new Subject<void>();

    constructor(private http: HttpClient, private readonly appState$: Store<GlobalState>) {}

    ngOnDestroy(): void {
      this.cancelLoadProviders.next();
      this.cancelLoadProviders.complete();
    }

    get(): Observable<Provider[]> {
        return this.http.get<Provider[]>(`/providers`);
    }

    getProvider(providerReference: string): Observable<Provider> {
        return this.http.get<Provider>(`/providers/${encodeURIComponent(providerReference)}`);
    }

    addProvider(provider: Provider): Observable<any> {
        return this.http.post(`/providers`, provider)
            .pipe(share());
    }

    public loadProviders() {
      this.cancelLoadProviders.next();
      this.appState$.dispatch(new ProvidersActions.LoadProvidersAction);
      this.get().pipe(
          takeUntil(this.cancelLoadProviders),
          take(1),
          catchError(error => {
              this.appState$.dispatch(new ProvidersActions.LoadProvidersFailAction(error));
              return throwError(error);
          })).subscribe((response: Provider[]) => {
              this.appState$.dispatch(new ProvidersActions.LoadProvidersSuccessAction(response));
          });
    }
}
