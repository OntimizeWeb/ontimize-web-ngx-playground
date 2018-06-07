import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-renderer',
  templateUrl: 'table-renderer.component.html'
})
export class TableRendererComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccounts().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
