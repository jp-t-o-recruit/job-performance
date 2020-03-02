import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { offlineProviders } from '@ngx-pwa/offline';

import { LoginComponent } from '../content/login/login.component';
import { UnavailableComponent } from '../content/unavailable/unavailable.component';

import { ContentRoutingModule } from './content-routing.module';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: 'unavailable', component: UnavailableComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // {
  //   path: 'content',
  //   loadChildren: './content-routing.module#ContentRoutingModule',
  //   // canActivate: [LoginGuard]
  // }
];

@NgModule({
  imports: [
    ContentRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    offlineProviders({ routeOffline: '/unavailable', routeUnavailable: '/unavailable' }),
  ]

})
export class AppRoutingModule {}
