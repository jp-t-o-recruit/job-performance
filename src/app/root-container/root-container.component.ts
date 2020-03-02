import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css']
})
export class RootContainerComponent implements OnInit {
  feed: Observable<any[]>;

  items$: Observable<any[]>;
  pages$: Observable<number>;
  currentPage$ = new BehaviorSubject(1);

  preload;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // // this.preload = this.http.get('https://node-hnapi.herokuapp.com/news');

    // this.feed = this.route.data.switchMap(data => {
    //   // return this.data.getFeed(data.feed);
    //   return null;
    // });

    // this.pages$ = this.feed.map(arr => Math.floor(arr.length / 30) + 1);

    // this.items$ = this.currentPage$.switchMap(page => {
    //   return this.feed.map(items => items.slice((page - 1) * 30, (page - 1) * 30 + 30));
    // });


  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    this.currentPage$.next(this.currentPage$.value - 1);
  }

}
