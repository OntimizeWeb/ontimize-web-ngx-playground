import { Component, OnInit, ViewChild } from '@angular/core';
import { OColumnCollapsibleComponent } from 'ontimize-web-ngx';
import { ExpandedStateService } from '../services/expanded-state.service';

@Component({
  selector: 'collapsible-menu',
  templateUrl: './collapsible-menu.component.html',
  styleUrls: ['./collapsible-menu.component.scss']
})
export class CollapsibleMenuComponent implements OnInit {

  @ViewChild("collapsible", { static: false }) collapsible: OColumnCollapsibleComponent;
  private expanded: boolean = true;

  constructor(
    protected expandedService: ExpandedStateService
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
      this.expanded = false;
    }
    else {
      this.expandedService.setState(true);
      this.expanded = true;
    }
  }

}
