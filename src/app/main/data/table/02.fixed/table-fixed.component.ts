import { Component, HostListener, ViewChild } from '@angular/core';
import { ConfigMenu } from '../../config-menu.class';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-fixed',
  templateUrl: 'table-fixed.component.html'
})
export class TableFixedComponent extends ConfigMenu {

  @ViewChild('fixedHeaderToggle', { static: false })
  fixedHeaderToggle: any = true;

  @ViewChild('height', { static: false })
  tableHeight: any;

  public data = TableUtils.getAccountsTableFixed().slice();

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      fixedHeader: this.fixedHeaderToggle.checked,
      height: this.tableHeight.nativeElement.value,
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

  ngAfterViewInit(): void {
    this.styleChangeOnResize("table-conf-btn-id", "80");

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize("table-conf-btn-id", "80");
  }

}
