import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "providers",
    pathMatch: "full",
  },
  {
    path: "providers",
    loadChildren: () => import("./providers/providers.module").then((m) => m.ProvidersModule),
  },
  { path: "**", redirectTo: "providers" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
