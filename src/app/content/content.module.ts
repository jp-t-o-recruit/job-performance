import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../routing/app-routing.module';
import { UiModule } from '../ui/ui.module';
import { ContributionFormComponent } from './contribution-form/contribution-form.component';
import { LoginComponent } from './login/login.component';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';
import { PwaQueueFormComponent } from './pwa-queue-form/pwa-queue-form.component';
import { UnavailableComponent } from './unavailable/unavailable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    ProductionSummaryComponent,
    PwaQueueFormComponent,
    LoginComponent,
    ContributionFormComponent,
    UnavailableComponent
  ]
})
export class ContentModule { }
