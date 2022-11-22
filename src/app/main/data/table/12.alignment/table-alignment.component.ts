import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-alignment',
  templateUrl: 'table-alignment.component.html'
})
export class TableAlignmentComponent {
  public data = TableUtils.getAccounts();

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

}
