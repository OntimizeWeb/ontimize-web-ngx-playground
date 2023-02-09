import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableComponent } from 'ontimize-web-ngx';
import { ConfigCollapsibleStateService } from '../../../../shared/services/config-collapsible-state.service';
import { ConfigMenu } from '../../config-menu.class';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent extends ConfigMenu implements AfterViewInit {


  @ViewChild('horizontalScrollToggle')
  horizontalScrollToggle: any = true;

  public data = TableUtils.getCustomers().slice();;

  @ViewChild('table')
  table: OTableComponent;

  constructor(protected configExpandedService: ConfigCollapsibleStateService) {
    super(configExpandedService);
  }

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
