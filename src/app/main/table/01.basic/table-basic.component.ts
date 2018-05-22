import { Component, OnInit, ViewChild } from '@angular/core';

import { OTranslateService } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

@Component({
  selector: 'table-basic',
  templateUrl: 'table-basic.component.html'
})
export class TableBasicComponent implements OnInit {

  @ViewChild('quickFilterToggle')
  quickFilterToggle: any;

  @ViewChild('filterCaseSensitiveToggle')
  filterCaseSensitive: any;

  @ViewChild('buttonAddToggle')
  buttonAddToggle: any;

  @ViewChild('buttonRemoveToggle')
  buttonRemoveToggle: any;

  @ViewChild('buttonRefreshToggle')
  buttonRefreshToggle: any;

  @ViewChild('selectMultipleToggle')
  selectMultipleToggle: any;

  @ViewChild('exportButtonToggle')
  exportButtonToggle: any;

  @ViewChild('columnsVisibilityToggle')
  columnsVisibilityToggle: any;

  @ViewChild('showTextToggle')
  showTextToggle: any;

  @ViewChild('paginationToggle')
  paginationToggle: any;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getCustomers().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      filter: this.quickFilterToggle.checked,
      filterCaseSensitive: this.filterCaseSensitive.checked,
      exportButtonToggle: this.exportButtonToggle.checked,
      columnsVisibilityToggle: this.columnsVisibilityToggle.checked,
      selectMultipleToggle: this.selectMultipleToggle.checked,
      buttonAddToggle: this.buttonAddToggle.checked,
      buttonRemoveToggle: this.buttonRemoveToggle.checked,
      buttonRefreshToggle: this.buttonRefreshToggle.checked,
      showTextToggle: this.showTextToggle.checked
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

  onAction1() {
    alert('onAction1');
  }

  actionClick() {
    console.log('actionClick');
  }

}
