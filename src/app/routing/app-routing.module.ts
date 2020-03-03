import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { offlineProviders } from '@ngx-pwa/offline';

import { LoginComponent } from '../content/login/login.component';
import { UnavailableComponent } from '../content/unavailable/unavailable.component';

import { ContentRoutingModule } from './content-routing.module';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: 'unavailable', component: UnavailableComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'content',
    loadChildren: './content-routing.module#ContentRoutingModule',
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // ContentRoutingModule
  ],
  exports: [RouterModule],
  providers: [
    offlineProviders({ routeOffline: '/unavailable', routeUnavailable: '/unavailable' }),
  ]

})
export class AppRoutingModule {}
