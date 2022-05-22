import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProviderDetailsSandbox } from './provider-details.sandbox';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Provider } from '../../shared/models/provider';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss'],
  providers: [ProviderDetailsSandbox]
})
export class ProviderDetailsComponent implements OnInit, OnDestroy {

  constructor(private sandbox: ProviderDetailsSandbox, private location: Location) { }

  public providerDetails: Provider;

  private subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    this.sandbox.LoadProviderDetails();

    this.subscriptions.push(
      this.sandbox.providerDetails$.subscribe(x => {
        this.providerDetails = x;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  backClicked() {
    this.location.back();
  }
}
