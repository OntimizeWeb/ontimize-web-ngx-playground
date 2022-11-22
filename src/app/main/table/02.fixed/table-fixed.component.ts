import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-fixed',
  templateUrl: 'table-fixed.component.html'
})
export class TableFixedComponent {

  @ViewChild('fixedHeaderToggle', { static: false })
  fixedHeaderToggle: any = true;

  @ViewChild('height', { static: false })
  tableHeight: any;

  @ViewChild('sidenav', { static: false })
  sidenav: MatSidenav;

  public data = TableUtils.getAccountsTableFixed().slice();

  private innerWidth: any;

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
    this.styleChangeOnResize();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize();
  }

  styleChangeOnResize(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1920) {
      this.sidenav.mode = "side";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(80px, 40px)";
    }
    else {
      this.sidenav.mode = "over";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(80px, 40px)";
      if (this.innerWidth <= 1279) {
        document.getElementById("table-conf-btn-id").style.transform = "rotate(0)";
      }
    }
  }

}
