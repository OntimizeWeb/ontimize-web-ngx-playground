import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

@Component({
  selector: 'table-custom-renderer',
  templateUrl: 'table-custom-renderer.component.html'
})
export class TableCustomRendererComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

  getTableData(): Array<any> {
    return TableUtils.getCards().slice();
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
