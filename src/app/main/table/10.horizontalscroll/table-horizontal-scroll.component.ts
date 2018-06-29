import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent {

  @ViewChild('horizontalScrollToggle')
  horizontalScrollToggle: any = true;

  @ViewChild('minwWdth')
  minwWdth: any;

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccountsTableFixed();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      horizontalScroll: this.horizontalScrollToggle.checked
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

}
