import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersSandbox } from './providers-overview.sandbox';
import { Provider,} from '../../shared/models/provider';
import { initialFilters } from '../../shared/store/reducers/providers.reducer';
import { ProvidersService } from '../../shared/services/providers.service';

@Component({
  selector: "app-providers-overview",
  templateUrl: "./providers-overview.component.html",
  providers: [ProvidersSandbox],
})
export class ProvidersOverviewComponent implements OnInit {
  filtersForm: FormGroup;
  providers$ = this.sandbox.GetProviders();

  constructor(
    private sandbox: ProvidersSandbox,
    public router: Router,
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
      active: initial.active,
    });
  }

  onRowClicked(rowData: Provider): void {
    this.router.navigate(["providers", rowData.code]);
  }
}
