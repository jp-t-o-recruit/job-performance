import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pair-block',
  templateUrl: './pair-block.component.html',
  styleUrls: ['./pair-block.component.css']
})
export class PairBlockComponent implements OnInit {

  @Input() tabs: { label: string, name: string, template: TemplateRef<any> }[];
  public active: string;

  constructor() { }

  ngOnInit() {
  }

}