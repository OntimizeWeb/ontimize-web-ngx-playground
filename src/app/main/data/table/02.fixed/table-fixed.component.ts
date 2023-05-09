import { Component, ViewChild } from '@angular/core';
import { TableUtils } from '../table-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

@Component({
  selector: 'table-fixed',
  templateUrl: 'table-fixed.component.html'
})
export class TableFixedComponent {

  @ViewChild('fixedHeaderToggle', { static: false })
  fixedHeaderToggle: any = true;

  @ViewChild('height', { static: false })
  tableHeight: any;

  @ViewChild('table', { static: false })
  table: any;

  public data = TableUtils.getAccountsTableFixed().slice();

  constructor() { }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  updateCodeValue(exampleComp: ExampleComponent, key: string, value: string) {
    const itemData: any = {
      fixedHeader: this.fixedHeaderToggle.checked,
      height: this.tableHeight.nativeElement.value,
    };
    for (let item in itemData) {
      if (item === key) {
        item = value;
      }
    }
    exampleComp.html = TableUtils.getHtml('o-table-fixed', this.table, itemData);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      fixedHeader: this.fixedHeaderToggle.checked,
      height: this.tableHeight.nativeElement.value,
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

}
