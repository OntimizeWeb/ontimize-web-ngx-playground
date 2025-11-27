import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableComponent } from 'ontimize-web-ngx';
import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent {

  html: string;

  @ViewChild('horizontalScrollToggle')
  horizontalScrollToggle: any = true;

  public data = TableUtils.getCustomers().slice();;

  @ViewChild('table')
  table: OTableComponent;

  constructor() { }

  updateCodeValue() {
    if (this.table) {
      this.table.horizontalScroll = this.horizontalScrollToggle.checked;
      this.table.updateScrolledState();
    }
    const itemData: any = { horizontalScroll: this.horizontalScrollToggle.checked };

    this.html = TableUtils.getHtml('o-table-horizontal-scroll', this.table, itemData);
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      horizontalScroll: this.horizontalScrollToggle.checked
    };
    this.html = TableUtils.getHtml(key, table, itemData);
  }

}
