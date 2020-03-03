import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LabelInputComponent } from './label-input/label-input.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
import { PwaToolbarComponent } from './pwa/pwa-toolbar/pwa-toolbar.component';
import { OnlineStateComponent } from './pwa/online-state/online-state.component';
import { CheckForUpdateService } from '../service/pwa/check-for-update.service';
import { PairBlockComponent } from './display-toggle-block/display-toggle-block.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    LoadingSpinnerComponent,
    TopNavComponent,
    LabelInputComponent,
    UpdateNotificationComponent,
    PwaToolbarComponent,
    OnlineStateComponent,
    PairBlockComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    TopNavComponent,
    LabelInputComponent,
    UpdateNotificationComponent,
    PwaToolbarComponent,
    PairBlockComponent
  ],
  providers: [
    CheckForUpdateService
  ]
})
export class UiModule {}
