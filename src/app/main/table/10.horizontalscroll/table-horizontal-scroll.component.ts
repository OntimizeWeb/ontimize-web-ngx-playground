import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { OTableComponent } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent implements AfterViewInit {


  @ViewChild('horizontalScrollToggle', { static: false })
  horizontalScrollToggle: any = true;

  @ViewChild('sidenav', { static: false })
  sidenav: MatSidenav;

  private innerWidth: any;

  public data = TableUtils.getCustomers().slice();;

  @ViewChild('table', { static: false })
  table: OTableComponent;

  ngAfterViewInit(): void {
    if (this.table) {
      this.table.updateScrolledState();
    }
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

  onToggleChange(val) {
    if (this.table) {
      this.table.horizontalScroll = val.checked;
      this.table.updateScrolledState();
    }
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      horizontalScroll: this.horizontalScrollToggle.checked
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

}
