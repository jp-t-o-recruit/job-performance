import { ApplicationRef, Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { concat, interval, Observer } from "rxjs";
import { first } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class CheckForUpdateService {

  constructor(
    private _appRef: ApplicationRef,
    private _swUpdate: SwUpdate
  ) {
    if (this._swUpdate.isEnabled) {
      const sixHours = 6 * 60 * 60 * 1000;
      // TODO: デバッグ用時間短縮
      // const intervalMillisecond = sixHours;
      const intervalMillisecond = 30 * 1000;
      this.setupIntervalAppIsStable(_appRef, intervalMillisecond, () => {
        _swUpdate.checkForUpdate();
      });
    }
  }

  setupIntervalAppIsStable(
    appRef: ApplicationRef,
    intervalMillisecond: number,
    observer: () => void
  ) {
    const appIsStable$ = appRef.isStable.pipe(
      first(isStable => isStable === true)
    );
    const interval$ = interval(intervalMillisecond);
    const everyIntervalOnceAppIsStable$ = concat(appIsStable$, interval$);

    return everyIntervalOnceAppIsStable$.subscribe(observer);
  }

  checkForUpdate() {
    this._swUpdate.checkForUpdate();
  }

  killServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (const registration of registrations) {
          // TODO: サービスワーカー消していいかログ出す
          console.log('serviceWorker unregistered', registration);
          // registration.unregister();
        }
      });
    }

    caches.keys().then(function(keys) {
        // キャッシュストレージを全て削除する
        keys.forEach(function(cacheName) {
            if (cacheName) {
              // TODO: キャッシュアプリ消していいかログ出す
              console.log('キャッシュ unregistered', cacheName);
              // caches.delete(cacheName);
            }
        });
    });
  }
}
