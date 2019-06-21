import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NavigationBarService } from '../../shared/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

}
