import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentRoutingModule } from '../routing/content-routing.module';
import { UiModule } from '../ui/ui.module';
import { ContributionFormComponent } from './contribution-form/contribution-form.component';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';
import { PwaQueueFormComponent } from './pwa-queue-form/pwa-queue-form.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    ContentRoutingModule,
  ],
  declarations: [
    TopNavComponent,
    ProductionSummaryComponent,
    PwaQueueFormComponent,
    ContributionFormComponent,
  ],
  exports: [
    TopNavComponent,
    ProductionSummaryComponent,
    PwaQueueFormComponent,
    ContributionFormComponent
  ],
})
export class ContentModule { }
