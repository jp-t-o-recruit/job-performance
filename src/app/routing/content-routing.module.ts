import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributionFormComponent } from '../content/contribution-form/contribution-form.component';
import { ProductionSummaryComponent } from '../content/production-summary/production-summary.component';
import { PwaQueueFormComponent } from '../content/pwa-queue-form/pwa-queue-form.component';
import { LoginGuard } from './guard/login.guard';

export const routes: Routes = [
  { canActivate: [LoginGuard], path: 'pwa-queue-form', component: PwaQueueFormComponent },
  { canActivate: [LoginGuard], path: 'production-summary', component: ProductionSummaryComponent },
  { canActivate: [LoginGuard], path: 'contribution-form', component: ContributionFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
