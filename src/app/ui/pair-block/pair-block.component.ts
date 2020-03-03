import { Component, OnInit, Input, TemplateRef } from '@angular/core';

export interface BlockTab {
  label: string;
  name: string;
  template: TemplateRef<any>;
  isDisplay?: boolean;
}

@Component({
  selector: 'app-pair-block',
  templateUrl: './pair-block.component.html',
  styleUrls: ['./pair-block.component.css']
})
export class PairBlockComponent implements OnInit {

  @Input() tabs: BlockTab[];
  public active: BlockTab;

  constructor() { }

  ngOnInit() {
  }

}
