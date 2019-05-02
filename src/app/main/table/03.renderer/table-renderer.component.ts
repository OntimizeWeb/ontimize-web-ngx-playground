import { Component } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-renderer',
  templateUrl: 'table-renderer.component.html'
})
export class TableRendererComponent {

  public getFiles(key: string): any {
    return TableUtils.getFiles(key);
  }

  public getTableData(): any[] {
    return TableUtils.getAccounts();
  }

  public onShowSource(key: string, table?: any, exampleComp?: any): void {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  public translateArgsFn(rowData: any): any[] {
    return [rowData.NUMCARDS];
  }

}
