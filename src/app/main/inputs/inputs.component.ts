import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OColumnCollapsibleComponent, OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {

  private expanded: boolean;

  @ViewChild("collapsible", {static: true}) collapsible: OColumnCollapsibleComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) {
    this.expanded = true;

  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);
  }

  /*col_click() {
    if (this.expanded) {
      this.expanded = false;
      this.collapsible.title = "";
    }
    else {
      this.expanded = true;
      this.collapsible.title = this.translateService.get('SELECTION');
    }
  }*/

}
