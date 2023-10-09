import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-calculated-column',
  templateUrl: 'table-calculated-column.component.html'
})
export class TableCalculatedColumnComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getProducts();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  profitability(row): boolean {
    return (row['TOTALSTOCK'] > 0 ? true : false);
  }

}
