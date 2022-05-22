import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Provider,} from '../provider';
import { ProvidersService } from '../providers.service';
import { GlobalState } from '../../shared/store';

@Component({
  selector: "app-providers-overview",
  templateUrl: "./providers-overview.component.html",
})
export class ProvidersOverviewComponent implements OnInit {
  filtersForm: FormGroup;
  providers$ = this.appState$.pipe(select((state: GlobalState) => state.providers.providers));

  constructor(
    private appState$: Store<GlobalState>,
    public router: Router,
    private providerService: ProvidersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.providerService.loadProviders();
    this.initForm();
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      search: null,
      active: null,
    });
  }

  onRowClicked(rowData: Provider): void {
    this.router.navigate(["providers", rowData.code]);
  }
}
