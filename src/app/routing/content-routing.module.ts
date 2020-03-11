import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as CONTENT_CHILDREN } from './content-routing';
import { TopNavComponent } from '../content/top-nav/top-nav.component';

export const routes: Routes = [
  // { path: '', component: TopNavComponent, children: CONTENT_CHILDREN },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopNavComponent, children: CONTENT_CHILDREN }
];
// export const routes: Routes = CONTENT_CHILDREN;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
