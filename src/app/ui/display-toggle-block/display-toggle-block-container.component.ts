import { Component, Input, TemplateRef } from '@angular/core';

export interface BlockTab {
  label: string;
  template: TemplateRef<any>;
  isDisplay: boolean;
  canHide: boolean;
}

@Component({
  selector: 'app-display-toggle-block-container',
  templateUrl: './display-toggle-block-container.component.html',
  styleUrls: ['./display-toggle-block-container.component.css']
})
export class DisplayToggleBlockContainerComponent {
  @Input() tabs: BlockTab[] = [];
}
