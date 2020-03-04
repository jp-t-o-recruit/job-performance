import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../service/data-source.service';

export interface ApiDataItem {
  title: string;
  review: string;
  rate: number;
  // 日付
  create_date: string;
}

export type ApiPostDataItem = Omit<ApiDataItem, 'create_date'>;

@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {

  title: string = '投稿タイトル';
  review: string = 'よかった';
  rate: number = 5;

  getResult: any;

  constructor(
    private dataSourceService: DataSourceService
    ) { }

  ngOnInit() {
    this.dataSourceService.get().subscribe((data: any[])=>{
      console.log(data);
      this.getResult = data;
    });
  }

  contribution() {
    const params: ApiPostDataItem[] = [{
      title: this.title,
      review: this.review,
      rate: this.rate,
    }];

    console.log('投稿', params);

    // postパターン実装
    this.dataSourceService.post(params).subscribe((data: any[])=>{
      console.log('投稿後', data);
      this.getResult = data;
    });

    // JSONPパターン実装
    // this.dataSourceService.post(params).subscribe((data: any)=>{
    //   console.log('投稿後', data);
    //   this.getResult = data;
    // });
  }
}
