import { Component } from '@angular/core';
import { of } from 'rxjs';

import { TableUtils } from '../../table-utils';

@Component({
  selector: 'table-row-expandable-function-sync',
  templateUrl: 'table-row-expandable-function-sync.component.html'
})
export class TableRowExpandableFunctionSyncComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  hasChilds(row: any, rowIndex: number) {
    // Check for each row if hasChilds or not to show or not the expansion icon.
    return row.HASCHILD ? of(true) : of(false);
  }
}
