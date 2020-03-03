import { Component, OnInit, Input, TemplateRef } from '@angular/core';

export interface BlockTab {
  label: string;
  name: string;
  template: TemplateRef<any>;
  isDisplay?: boolean;
}

@Component({
  selector: 'app-display-toggle-block',
  templateUrl: './display-toggle-block.component.html',
  styleUrls: ['./display-toggle-block.component.css']
})
export class PairBlockComponent implements OnInit {

  @Input() tabs: BlockTab[];
  public active: BlockTab;

  constructor() { }

  ngOnInit() {
  }

}
