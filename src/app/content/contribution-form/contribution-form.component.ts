import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {
  id: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contribution() {
    // TODO: API送信
  }
}
