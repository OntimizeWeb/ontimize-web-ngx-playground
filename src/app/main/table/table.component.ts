import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { NavigationBarService } from '../../shared/navigation-bar.service';
import { OColumnCollapsibleComponent, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @ViewChild("collapsible", { static: true }) collapsible: OColumnCollapsibleComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

  status() {
    if (this.collapsible.expPanel._getExpandedState() == "collapsed") {
      document.getElementById("collapsible").style.display = "none";
    }
    else {
      this.collapsible.title = this.translateService.get('SELECTION');
      document.getElementById("collapsible").style.display = "block";
    }
  }

}
