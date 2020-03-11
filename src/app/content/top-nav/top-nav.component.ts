import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes as CONTENT_CHILDREN } from '../../routing/content-routing';
import { AccountService, DemoAccount } from '../../service/pwa/account.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  public menus: { link: string, label: string}[] = [];

  public account: DemoAccount = null;

  constructor(
    private _router: Router,
    private _accountService: AccountService
  ) {
    this._accountService.changeAccount.subscribe(v => {
      console.log('アカウント変わった', v);
      this.account = v
    });
    this.account = this._accountService.account;

    this.menus = CONTENT_CHILDREN.map(d => {
      return {
        link: d.path,
        label: d.path
      };
    });
  }

  logout() {
    this._accountService.logout();
    this._router.navigate(['/']);
  }
}
