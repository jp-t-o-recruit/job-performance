import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { offlineProviders } from '@ngx-pwa/offline';
import { LoginComponent } from '../content/login/login.component';
import { UnavailableComponent } from '../content/unavailable/unavailable.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: 'unavailable', component: UnavailableComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    // path: '',
    path: 'content',
    canActivate: [LoginGuard],
    loadChildren: './content-routing.module#ContentRoutingModule'
    // children: [
    //   {
    //     path: 'content',
    //     loadChildren: './content-routing.module#ContentRoutingModule'
    //     // , canActivate: [LoginGuard]
    //   },
    // ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    offlineProviders({ routeOffline: '/unavailable', routeUnavailable: '/unavailable' }),
  ]

})
export class AppRoutingModule {}
