import { Component } from '@angular/core';
import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-insertable-row',
  templateUrl: 'table-insertable-row.component.html'
})
export class TableInsertableRowComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccountsInsertableRow();
  }

}
