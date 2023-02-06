import { Component, ViewChild } from '@angular/core';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-basic',
  templateUrl: 'table-basic.component.html'
})
export class TableBasicComponent {

  @ViewChild('titleInput')
  titleInput: any;

  @ViewChild('controlsToggle')
  controlsToggle: any;

  @ViewChild('titleToggle')
  titleToggle: any;

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

  @ViewChild('autoAdjustToggle')
  autoAdjustToggle: any;

  @ViewChild('horizontalScrollToggle')
  horizontalScrollToggle: any;

  public data = TableUtils.getCustomers();

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }


  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      titleInput: this.titleInput.nativeElement.value,
      controlsToggle: this.controlsToggle.checked,
      titleToggle: this.titleToggle.checked,
      filter: this.quickFilterToggle.checked,
      filterCaseSensitive: this.filterCaseSensitive.checked,
      exportButtonToggle: this.exportButtonToggle.checked,
      columnsVisibilityToggle: this.columnsVisibilityToggle.checked,
      selectMultipleToggle: this.selectMultipleToggle.checked,
      buttonAddToggle: this.buttonAddToggle.checked,
      buttonRemoveToggle: this.buttonRemoveToggle.checked,
      buttonRefreshToggle: this.buttonRefreshToggle.checked,
      showTextToggle: this.showTextToggle.checked,
      autoAdjust: this.autoAdjustToggle.checked,
      horizontalScroll: this.horizontalScrollToggle.checked
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
