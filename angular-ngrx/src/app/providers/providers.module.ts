import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProvidersOverviewComponent } from './providers-overview/providers-overview.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

@NgModule({
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProvidersOverviewComponent,
    ProviderDetailsComponent,
    AddProviderComponent
  ]
})
export class ProvidersModule {}
