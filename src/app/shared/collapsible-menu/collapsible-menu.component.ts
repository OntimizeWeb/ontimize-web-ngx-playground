import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OColumnCollapsibleComponent } from 'ontimize-web-ngx';
import { CollapsibleStateService } from '../services/collapsible-state.service';

@Component({
  selector: 'collapsible-menu',
  templateUrl: './collapsible-menu.component.html',
  styleUrls: ['./collapsible-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollapsibleMenuComponent implements OnInit {

  @ViewChild("collapsible") collapsible: OColumnCollapsibleComponent;
  public expanded: boolean = true;

  constructor(
    protected expandedService: CollapsibleStateService
  ) { }

  ngOnInit() {
    this.expandedService.onStateChange((state) => {
      if (state) {
        this.expanded = true;
      }
      else {
        this.expanded = false;
      }
    });
  }

  status() {
    if (this.collapsible.expPanel._getExpandedState() == "collapsed") {
      this.expandedService.setState(false);
    }
    else {
      this.expandedService.setState(true);
    }
  }

}
