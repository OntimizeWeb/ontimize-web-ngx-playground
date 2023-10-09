import { Component, ViewChild } from '@angular/core';
import { TableUtils } from '../table-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

@Component({
  selector: 'table-basic',
  templateUrl: 'table-basic.component.html'
})
export class TableBasicComponent {

  html: string;

  @ViewChild('titleInput', { static: false })
  titleInput: any;

  @ViewChild('controlsToggle', { static: false })
  controlsToggle: any;

  @ViewChild('titleToggle', { static: false })
  titleToggle: any;

  @ViewChild('quickFilterToggle', { static: false })
  quickFilterToggle: any;

  @ViewChild('filterCaseSensitiveToggle', { static: false })
  filterCaseSensitive: any;

  @ViewChild('buttonAddToggle', { static: false })
  buttonAddToggle: any;

  @ViewChild('buttonRemoveToggle', { static: false })
  buttonRemoveToggle: any;

  @ViewChild('buttonRefreshToggle', { static: false })
  buttonRefreshToggle: any;

  @ViewChild('selectMultipleToggle', { static: false })
  selectMultipleToggle: any;

  @ViewChild('exportButtonToggle', { static: false })
  exportButtonToggle: any;

  @ViewChild('columnsVisibilityToggle', { static: false })
  columnsVisibilityToggle: any;

  @ViewChild('showTextToggle', { static: false })
  showTextToggle: any;

  @ViewChild('paginationToggle', { static: false })
  paginationToggle: any;

  @ViewChild('autoAdjustToggle', { static: false })
  autoAdjustToggle: any;

  @ViewChild('horizontalScrollToggle', { static: false })
  horizontalScrollToggle: any;

  @ViewChild('table', { static: false })
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

