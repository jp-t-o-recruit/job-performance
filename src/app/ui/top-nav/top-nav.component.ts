import { Component } from '@angular/core';
import { AccountService, DemoAccount } from '../../service/pwa/account.service';
import { routes as CONTENT_ROUTES } from '../../routing/content-routing.module';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  menus = [
    {
      link: '/contribution-form',
      label: 'contribution-form'
    },
    {
      link: '/content/production-summary',
      label: 'production-summary'
    }
  ];

  public account: DemoAccount = null;

  constructor(
    private _accountService: AccountService
  ) {
    this._accountService.changeAccount.subscribe(v => this.account = v);

    this.menus = CONTENT_ROUTES.map(d => {
      return {
        link: d.path,
        label: d.path
      };
    });
  }
}
