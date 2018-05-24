import { Component } from '@angular/core';
import { OTranslateService, Util } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-context-menu',
  templateUrl: 'table-context-menu.component.html'
})
export class TableContextMenuComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccounts().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  getVisible(data: any): boolean {
    return Util.parseBoolean(data.COMMISSION);
  }

  onExecute(text: string, event: any): void {
    alert('Clicked menu element: ' + text + '\n' + event.data.NAME);
  }

}
