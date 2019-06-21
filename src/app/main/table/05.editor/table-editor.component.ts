import { Component } from '@angular/core';
import { TableUtils } from '../table-utils';


@Component({
  selector: 'table-editor',
  templateUrl: 'table-editor.component.html'
})
export class TableEditorComponent {

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    let accounts = TableUtils.getAccounts();
    accounts.forEach(obj => {
      if (obj['STARTDATE'] && typeof obj['STARTDATE'] === 'number') {
        obj['STARTDATE'] = new Date(obj['STARTDATE']).toISOString();
      }
    });
    return accounts;
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  editionStarted(arg: any) {
    console.log('editionStarted', arg);
  }

  editionCancelled(arg: any) {
    console.log('editionCancelled', arg);
  }

  editionCommitted(arg: any) {
    console.log('editionCommitted', arg);
  }

}
