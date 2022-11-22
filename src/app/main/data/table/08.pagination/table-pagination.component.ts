import { Component, HostListener, ViewChild } from '@angular/core';
import { ConfigMenu } from '../../config-menu.class';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-pagination',
  templateUrl: 'table-pagination.component.html'
})
export class TablePaginationComponent extends ConfigMenu {
  @ViewChild('pageSizeOptionsInput', { static: false })
  pageSizeOptionsInput: any;

  public data = TableUtils.getBranches();

  ngAfterViewInit(): void {
    this.styleChangeOnResize("table-conf-btn-id", "80");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize("table-conf-btn-id", "80");
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
