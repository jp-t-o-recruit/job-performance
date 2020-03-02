import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { ContentModule } from './content/content.module';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { RootContainerComponent } from './root-container/root-container.component';
import { CheckForUpdateService } from './service/pwa/check-for-update.service';

@NgModule({
  declarations: [
    AppComponent,
    RootContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContentModule,
    UiModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // TODO: サービスワーカー機能デバッグのため動作させる
		// ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  bootstrap: [AppComponent],
  providers: [CheckForUpdateService],
})
export class AppModule { }
