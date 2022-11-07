import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { OColumnCollapsibleComponent, OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {

  @ViewChild("collapsible", {static: true}) collapsible: OColumnCollapsibleComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);

  }

  status() {
    if (this.collapsible.expPanel._getExpandedState() == "collapsed") {
      this.collapsible.title = "";
      document.getElementById("collapsible").className = "collapsed";
    }
    else {
      this.collapsible.title = this.translateService.get('SELECTION');
      document.getElementById("collapsible").className = "o-column-collapsible";
    }
  }


}
