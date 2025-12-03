import { Component, OnInit } from '@angular/core';
import { TableUtils } from '../table-utils';


@Component({
  selector: 'table-editor',
  templateUrl: 'table-editor.component.html'
})
export class TableEditorComponent implements OnInit{

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  protected accounts = TableUtils.getAccounts();

  ngOnInit() {
    this.accounts.forEach(obj => {
      if (obj['STARTDATE'] && typeof obj['STARTDATE'] === 'number') {
        obj['STARTDATE'] = new Date(obj['STARTDATE']).toISOString();
      }
    });
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
