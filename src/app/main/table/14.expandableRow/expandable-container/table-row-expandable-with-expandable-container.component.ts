import { Component } from '@angular/core';
import { TableUtils } from '../../table-utils';

@Component({
  selector: 'table-row-expandable-with-expandable-container',
  templateUrl: 'table-row-expandable-with-expandable-container.component.html'
})
export class TableRowExpandableWithContainerComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

}
