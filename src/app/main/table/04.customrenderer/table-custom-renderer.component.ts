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
    let result: any = TableUtils.getFiles(key);

    let files = [];
    files.push({
      'label': 'o-table-column-renderer-cardtype.component.html',
      'type': 'html',
      'data': TableUtils.getHtmlRendererCardType()
    });
    files.push({
      'label': 'o-table-column-renderer-cardtype.component.ts',
      'type': 'typescript',
      'data': TableUtils.getTypescriptRendererCardType()
    });
    files.push({
      'label': 'o-table-column-cell-balance.component.html',
      'type': 'html',
      'data': TableUtils.getHtmlRendererBalance()
    });
    files.push({
      'label': 'o-table-column-cell-balance.component.ts',
      'type': 'typescript',
      'data': TableUtils.getTypescriptRendererBalance()
    });
    files.push({
      'label': 'o-table-column-renderer-totalready.component.html',
      'type': 'html',
      'data': TableUtils.getHtmlRendererTotalReady()
    });
    files.push({
      'label': 'o-table-column-renderer-totalready.component.ts',
      'type': 'typescript',
      'data': TableUtils.getTypescriptRendererTotalReady()
    });
    result.files = files;

    return result;
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
