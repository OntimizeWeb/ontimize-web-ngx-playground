import { Component, ViewEncapsulation } from '@angular/core';
import { CollapsibleStateService } from '../services/collapsible-state.service';

@Component({
  selector: 'header-button-menu',
  templateUrl: './header-button-menu.component.html',
  styleUrls: ['./header-button-menu.component.scss'],
  inputs: [
    'compName: comp-name',
    'compDesc: comp-desc'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderButtonMenuComponent {

  private compName: string;
  private compDesc: string;
  private expanded: boolean = true;

  constructor(
    protected expandedService: CollapsibleStateService
  ) { }

  ngAfterViewInit() {
    this.expandedService.onStateChange((state) => {
      if (state) {
        this.expanded = true;
      }
      else {
        this.expanded = false;
      }
    });
  }

  expand() {
    this.expandedService.setState(true);
  }
}
