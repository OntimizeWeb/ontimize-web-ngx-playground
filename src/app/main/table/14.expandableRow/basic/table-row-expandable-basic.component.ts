import { Component } from '@angular/core';
import { TableUtils } from '../../table-utils';

@Component({
  selector: 'table-row-expandable-basic',
  templateUrl: 'table-row-expandable-basic.component.html'
})
export class TableRowExpandableBasicComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }


}
