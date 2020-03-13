import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-alignment',
  templateUrl: 'table-alignment.component.html'
})
export class TableAlignmentComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccounts();
  }

}
