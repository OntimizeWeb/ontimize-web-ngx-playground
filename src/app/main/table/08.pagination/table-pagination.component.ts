import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-pagination',
  templateUrl: 'table-pagination.component.html'
})
export class TablePaginationComponent {
  @ViewChild('pageSizeOptionsInput', { static: false })
  pageSizeOptionsInput: any;

  public data = TableUtils.getBranches();

  @ViewChild('sidenav', { static: false })
  sidenav: MatSidenav;

  private innerWidth: any;

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
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
    }
    else {
      this.sidenav.mode = "over";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
      if (this.innerWidth <= 1279) {
        document.getElementById("table-conf-btn-id").style.transform = "rotate(0)";
      }
    }
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
    this.pageSizeOptionsInput =  this.pageSizeOptionsInput.nativeElement.value;
  }

  onEmptySetDefault() {
    this.pageSizeOptionsInput.nativeElement.value = this.pageSizeOptionsInput.nativeElement.value != '' ? this.pageSizeOptionsInput.nativeElement.value : "5;10;15";
  }
}
