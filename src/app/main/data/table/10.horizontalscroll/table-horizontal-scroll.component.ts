import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableComponent } from 'ontimize-web-ngx';
import { DataStructureComponent } from '../../../../shared/data-structure/data-structure.component';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent implements AfterViewInit {


  @ViewChild('horizontalScrollToggle', { static: false })
  horizontalScrollToggle: any = true;

  public data = TableUtils.getCustomers().slice();;

  @ViewChild('table', { static: false })
  table: OTableComponent;

  @ViewChild('sidenavComp', { static: false })
  dataStructure: DataStructureComponent;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.table) {
      this.table.updateScrolledState();
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
