import { Routes } from '@angular/router';
import { ContributionFormComponent } from '../content/contribution-form/contribution-form.component';
import { ProductionSummaryComponent } from '../content/production-summary/production-summary.component';
import { PwaQueueFormComponent } from '../content/pwa-queue-form/pwa-queue-form.component';

export const routes: Routes = [
  { path: 'pwa-queue-form', component: PwaQueueFormComponent },
  { path: 'production-summary', component: ProductionSummaryComponent },
  { path: 'contribution-form', component: ContributionFormComponent },
];
