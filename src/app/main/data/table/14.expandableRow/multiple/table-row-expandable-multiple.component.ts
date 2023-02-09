import { Component } from '@angular/core';
import { TableUtils } from '../../table-utils';

@Component({
  selector: 'table-row-expandable-multiple',
  templateUrl: 'table-row-expandable-multiple.component.html',
  styleUrls: ['table-row-expandable-multiple.component.scss'],
})
export class TableRowExpandableMultipleComponent {

  tableData: Array<any> = TableUtils.getPeriodicElements();
  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }


}
