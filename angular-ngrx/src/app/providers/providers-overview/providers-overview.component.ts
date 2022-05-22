import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProvidersSandbox } from './providers-overview.sandbox';
import { Provider,} from '../../shared/models/provider';
import { initialFilters } from '../../shared/store/reducers/providers.reducer';
import { ProvidersService } from '../../shared/services/providers.service';

@Component({
  selector: "app-providers-overview",
  templateUrl: "./providers-overview.component.html",
  providers: [ProvidersSandbox],
})
export class ProvidersOverviewComponent implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  isLoading$ = this.sandbox.IsLoading();
  private subscriptions: Subscription[] = [];

  constructor(
    private sandbox: ProvidersSandbox,
    private router: Router,
    private providerService: ProvidersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.providerService.loadProviders();
    this.initForm();
  }

  private initForm() {
    const initial = initialFilters();
    this.filtersForm = this.fb.group({
      search: initial.search,
      filters: this.fb.group({
        status: [initial.filters.status, null, { updateOn: "change" }],
      }),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onRowClicked(rowData: Provider) {
    this.router.navigate(["providers", rowData.code]);
  }

  addProvider() {
    this.router.navigate(["providers/new"], {
      queryParamsHandling: "preserve",
    });
  }
}
