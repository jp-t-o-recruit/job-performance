import { Component, OnInit } from "@angular/core";
import { CheckForUpdateService } from '../../../service/pwa/check-for-update.service';
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-pwa-toolbar",
  templateUrl: "./pwa-toolbar.component.html",
  styleUrls: ["./pwa-toolbar.component.css"]
})
export class PwaToolbarComponent implements OnInit {
  public swEnable: boolean = false;

  constructor(
    private _swUpdate: SwUpdate,
    private _checkForUpdateService: CheckForUpdateService,
  ) {
    this.swEnable = this._swUpdate.isEnabled;
  }

  ngOnInit() {}

  checkState() {
    this._checkForUpdateService.checkForUpdate();
  }

  killServiceWorker() {
    this._checkForUpdateService.killServiceWorker();
  }
}
