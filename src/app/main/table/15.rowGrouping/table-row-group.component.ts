import { Component, } from '@angular/core';
import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-row-group',
  templateUrl: 'table-row-group.component.html'
})
export class TableRowGroupComponent {
  public data = TableUtils.getAccountsGroupByColumn();

  public getFiles(key: string): any {
    return TableUtils.getFiles(key);
  }


  public onShowSource(key: string, table?: any, exampleComp?: any): void {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  public translateArgsFn(rowData: any): any[] {
    return [rowData.NUMCARDS];
  }

  public filterFunction(cellValue: any, rowValue: any, quickFilter?: string): boolean {
    return rowValue['NUMCARDS'] === 2;
  }
}
