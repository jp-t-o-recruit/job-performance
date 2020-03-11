import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './content/login/login.component';
// import { RootContainerComponent } from './root-container/root-container.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { CheckForUpdateService } from './service/pwa/check-for-update.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnavailableComponent } from './content/unavailable/unavailable.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    // RootContainerComponent,
    UnavailableComponent,

    // ログインコンポーネントは遅延ロードしていないタイミングで使用するため
    LoginComponent,
  ],
  imports: [
    // ログインコンポーネントで使用
    CommonModule,
    FormsModule,
    UiModule,

    AppRoutingModule,
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
  providers: [CheckForUpdateService],
})
export class AppModule { }
