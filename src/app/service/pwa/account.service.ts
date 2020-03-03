import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

export interface DemoAccount {
  id: string;
  name: string;
}

@Injectable({ providedIn: "root" })
export class AccountService {

  public changeAccount = new Subject<DemoAccount>();

  public get isLogin() : boolean {
    return !!this._account;
  };

  public set account(account: DemoAccount) {
    if (this._account != account) {
      this._account = account;
      this.changeAccount.next(this._account);
    }
  };
  public get account(): DemoAccount {
    return this._account;
  };

  private _account = null;

  login(account: DemoAccount) {
    this.account = account;
  }

  logout() {
    this._account = null;
  }

}
