import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-pagination',
  templateUrl: 'table-pagination.component.html'
})
export class TablePaginationComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getBranches().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
