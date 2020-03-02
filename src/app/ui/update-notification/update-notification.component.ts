import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
	selector: 'app-update-notification',
	templateUrl: './update-notification.component.html',
	styleUrls: ['./update-notification.component.css'],
})
export class UpdateNotificationComponent implements OnInit {
	public showUpdate: boolean = false;
  public showUpdated: boolean = false;

	constructor(private _swUpdate: SwUpdate) {}

	ngOnInit() {
		if (this._swUpdate.isEnabled) {
			this._swUpdate.available.subscribe(() => {
				this.showUpdate = true;
			});

			this._swUpdate.activated.subscribe(() => {
				this.showUpdated = true;
			});
		}
	}

	doUpdate() {
		this.showUpdate = false;
		window.location.reload();
	}

  hideShowUpdated() {
    this.showUpdated = false;
  }
}
