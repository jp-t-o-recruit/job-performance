import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayToggleBlockContainerComponent } from './display-toggle-block/display-toggle-block-container.component';
import { DisplayToggleBlockComponent } from './display-toggle-block/display-toggle-block.component';
import { LabelInputComponent } from './label-input/label-input.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { OnlineStateComponent } from './pwa/online-state/online-state.component';
import { PwaToolbarComponent } from './pwa/pwa-toolbar/pwa-toolbar.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    LoadingSpinnerComponent,
    LabelInputComponent,
    UpdateNotificationComponent,
    PwaToolbarComponent,
    OnlineStateComponent,
    DisplayToggleBlockContainerComponent,
    DisplayToggleBlockComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    LabelInputComponent,
    UpdateNotificationComponent,
    PwaToolbarComponent,
    DisplayToggleBlockContainerComponent,
    DisplayToggleBlockComponent
  ]
})
export class UiModule {}
