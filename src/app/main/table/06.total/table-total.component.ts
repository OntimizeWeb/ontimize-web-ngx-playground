import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-total',
  templateUrl: 'table-total.component.html'
})
export class TableTotalComponent {
  public data = TableUtils.getProducts();


  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }


  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
