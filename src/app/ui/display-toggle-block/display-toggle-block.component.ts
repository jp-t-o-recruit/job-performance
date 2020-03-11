import { AfterViewInit, Component, Input, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { BlockTab, DisplayToggleBlockContainerComponent } from './display-toggle-block-container.component';

@Component({
  selector: 'app-display-toggle-block',
  templateUrl: './display-toggle-block.component.html',
  styleUrls: ['./display-toggle-block.component.css']
})
export class DisplayToggleBlockComponent implements AfterViewInit, BlockTab, OnDestroy {
  @Input() label: string = '';
  @Input() isDisplay: boolean = false;
  @Input() canHide: boolean = true;

  @ViewChild('template') template: TemplateRef<any>;

  constructor(private _container: DisplayToggleBlockContainerComponent) {}

  ngAfterViewInit() {
    this._container.tabs.push(this);
  }

  ngOnDestroy() {
    const index = this._container.tabs.indexOf(this);
    if (index) {
      this._container.tabs.splice(index, 1);
    }
  }
}
