import { Component, ViewChild } from '@angular/core';
import { TableUtils } from '../table-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

@Component({
  selector: 'table-basic',
  templateUrl: 'table-basic.component.html'
})
export class TableBasicComponent {

  html: string;

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

  @ViewChild('table')
  table: any;

  public data = TableUtils.getCustomers();

  constructor() { }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  updateCodeValue(key: string, value: string) {
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
    for (let item in itemData) {
      if (item === key) {
        item = value;
      }
    }
    this.html = TableUtils.getHtml('o-table', this.table, itemData);
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
    this.html = TableUtils.getHtml(key, table, itemData);
  }

  onAction1() {
    alert('onAction1');
  }

  actionClick() {
    console.log('actionClick');
  }

}

