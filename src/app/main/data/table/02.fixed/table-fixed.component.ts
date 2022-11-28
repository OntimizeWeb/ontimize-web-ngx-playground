import { Component, ViewChild } from '@angular/core';
import { ConfigCollapsibleStateService } from '../../../../shared/services/config-collapsible-state.service';
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

  constructor(protected configExpandedService: ConfigCollapsibleStateService) {
    super(configExpandedService);
  }

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

}
