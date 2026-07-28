import { Component, ViewEncapsulation } from '@angular/core';
import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-renderer',
  styleUrls: ['./table-renderer.component.scss'],
  templateUrl: 'table-renderer.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TableRendererComponent {

  public data = TableUtils.getAccounts();

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
