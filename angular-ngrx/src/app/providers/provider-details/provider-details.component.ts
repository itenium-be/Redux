import { GlobalState } from '../../shared/store';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Provider } from '../provider';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-provider-details",
  templateUrl: "./provider-details.component.html",
  providers: [],
})
export class ProviderDetailsComponent {
  constructor(
    private appState$: Store<GlobalState>,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  provider$: Observable<Provider> = this.appState$.pipe(select(
    (state: GlobalState) => state.providers.providers.find(p => p.code === this.route.snapshot.params['ref'])
  ));

  // TODO: RXJS Training:
  // --> Fetch data when not yet available
  // --> Fallback when code does not exist
  // --> Combine with Routing instead of Snapshot
  // --> This is becoming a handful, could be put in a Selectors or Queries file

  backClicked() {
    this.location.back();
  }
}
