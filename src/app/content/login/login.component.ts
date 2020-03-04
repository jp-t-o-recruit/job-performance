import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, DemoAccount } from '../../service/pwa/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string;
  password: string;

  constructor(
    private _router: Router,
    private _accountService: AccountService
  ) { }

  ngOnInit() {
    // TODO: デバッグ用ログイン情報設定
    this.id = '123';
    this.password = '123';
    this.login();
  }

  login() {
    const account: DemoAccount = { id: this.id, name: `デモユーザー`};
    this._accountService.login(account);
    // TODO: デバッグ用に行き先設定
    // this._router.navigate(['/content/production-summary']);
    this._router.navigate(['/content/contribution-form']);
  }
}
