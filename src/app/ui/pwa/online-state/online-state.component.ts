import { Component } from "@angular/core";
import { Network } from "@ngx-pwa/offline";

@Component({
  selector: "app-online-state",
  templateUrl: "./online-state.component.html",
  styleUrls: ["./online-state.component.css"]
})
export class OnlineStateComponent {
  networkStatus$;
  constructor(protected network: Network) {
    this.networkStatus$ = this.network.onlineChanges;
  }
}
