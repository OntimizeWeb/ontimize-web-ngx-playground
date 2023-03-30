import { Component, ViewChild } from '@angular/core';
import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-pagination',
  templateUrl: 'table-pagination.component.html'
})
export class TablePaginationComponent {
  @ViewChild('pageSizeOptionsInput', { static: false })
  pageSizeOptionsInput: any;

  public data = TableUtils.getBranches();

  constructor() { }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
    this.pageSizeOptionsInput = this.pageSizeOptionsInput.nativeElement.value;
  }

  onEmptySetDefault() {
    this.pageSizeOptionsInput.nativeElement.value = this.pageSizeOptionsInput.nativeElement.value != '' ? this.pageSizeOptionsInput.nativeElement.value : "5;10;15";
  }

}
