import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { offlineProviders } from '@ngx-pwa/offline';
import { LoginComponent } from '../content/login/login.component';
import { UnavailableComponent } from '../content/unavailable/unavailable.component';
import { LoginGuard } from './guard/login.guard';
// import { ContentModule } from '../content/content.module';


const routes: Routes = [
  { path: 'unavailable', component: UnavailableComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    // path: '',
    path: 'content',
    canActivate: [LoginGuard],
    loadChildren: '../content/content.module#ContentModule' // 遅延ロードするのはルーティングを内包するコンポーネント軍自体のモジュール

    // children: [
    //   { path: 'content', loadChildren: '../content/content.module#ContentModule' },
    // ]
  },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'content', pathMatch: 'full' },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: 'unavailable' }, // 404
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
