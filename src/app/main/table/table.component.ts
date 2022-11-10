import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { NavigationBarService } from '../../shared/navigation-bar.service';
import { OColumnCollapsibleComponent, OTranslateService } from 'ontimize-web-ngx';
import { ExpandedStateService } from '../../shared/services/expanded-state.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @ViewChild("collapsible", { static: false }) collapsible: OColumnCollapsibleComponent;
  private expanded: boolean = true;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected expandedService: ExpandedStateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
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
