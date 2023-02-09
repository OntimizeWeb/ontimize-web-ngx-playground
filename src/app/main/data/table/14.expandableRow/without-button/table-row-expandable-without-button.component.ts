import { Component, ViewChild } from '@angular/core';
import { TableUtils } from '../../table-utils';
import { OTableComponent, OnClickTableEvent } from 'ontimize-web-ngx';

@Component({
  selector: 'table-row-expandable-without-button',
  templateUrl: 'table-row-expandable-without-button.component.html'
})
export class TableRowExpandableWithoutButtonComponent {

  @ViewChild('table', { static: true }) table: OTableComponent;

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onClick(event: OnClickTableEvent) {
    this.table.toogleRowExpandable(event.row, event.rowIndex, event.mouseEvent);
  }
}
