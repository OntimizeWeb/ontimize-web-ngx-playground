import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OColumnCollapsibleComponent, OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';
import { ExpandedStateService } from '../../shared/services/expanded-state.service';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {

  @ViewChild("collapsible", {static: false}) collapsible: OColumnCollapsibleComponent;
  private expanded: boolean = true;
  private selectedComponent: string;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected expandedService: ExpandedStateService,
    protected router: Router
  ) {
    router.events.subscribe((val) => {
      this.selectedComponent = this.router.url.split("/")[this.router.url.split("/").length - 1].toUpperCase();
    });
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
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
