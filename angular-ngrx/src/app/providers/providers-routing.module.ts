import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersOverviewComponent } from './providers-overview/providers-overview.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

const providersRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProvidersOverviewComponent },
      { path: 'new', component: AddProviderComponent },
      { path: ':ref', component: ProviderDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(providersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProvidersRoutingModule { }
