import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-fixed',
  styleUrls: ['table-fixed.component.scss'],
  templateUrl: 'table-fixed.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TableFixedComponent {

  @ViewChild('fixedHeaderToggle')
  fixedHeaderToggle: any = true;

  @ViewChild('height')
  tableHeight: any;

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccountsTableFixed().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      fixedHeader: this.fixedHeaderToggle.checked,
      height: this.tableHeight.nativeElement.value,
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

}
