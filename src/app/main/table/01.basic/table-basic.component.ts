import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { TableUtils } from '../table-utils';

@Component({
  selector: 'table-basic',
  templateUrl: 'table-basic.component.html'
})
export class TableBasicComponent {

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

  @ViewChild('sidenav', { static: false })
  sidenav: MatSidenav;

  public data = TableUtils.getCustomers();

  private innerWidth: any;

  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1920) {
      this.sidenav.opened = true;
      this.sidenav.mode = "side";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
    }
    else {
      this.sidenav.mode = "over";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
      if (this.innerWidth <= 1279) {
        document.getElementById("table-conf-btn-id").style.transform = "rotate(0)";
      }
    }

  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1920) {
      this.sidenav.mode = "side";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
    }
    else {
      this.sidenav.mode = "over";
      document.getElementById("table-conf-btn-id").style.transform = "rotate(90deg) translate(150px, 40px)";
      if (this.innerWidth <= 1279) {
        document.getElementById("table-conf-btn-id").style.transform = "rotate(0)";
      }
    }
  }

}
