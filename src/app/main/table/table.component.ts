import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';
import { TableUtils } from './table-utils';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {


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

  @ViewChild('showTextToggle')
  showTextToggle: any;

  @ViewChild('paginationToggle')
  paginationToggle: any;


  @ViewChild('tableTitle')
  tableTitle: any;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('FIELDS');
    title = title + ' > ' + this.translateService.get('LISTS');
    this.navigationService.setTitle(title);
  }

  onAction1() {
    alert('onAction1');
  }

  onAction2() {
    alert('onAction2');
  }

  onIconAction() {
    alert('onIconAction');
  }

  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }

  getTableData(itemNumber?: number): Array<any> {
    const result = [];

    let data: Array<any> = TableUtils.getAccounts();
    for (let i = 0; i < data.length; i++) {
      result.push(data[i]);
    }

    return result;
  }

  getTableData2(itemNumber?: number): Array<any> {
    const result = [];

    let data: Array<any> = TableUtils.getCustomers();
    for (let i = 0; i < data.length; i++) {
      result.push(data[i]);
    }

    return result;
  }

  getTableData3() {
    const result = [];

    const data: Array<any> = TableUtils.getProducts();
    for (let i = 0; i < data.length; i++) {
      result.push(data[i]);
    }

    return result;
  }

  getComponentId(key: string) {
    switch (key) {
      case 'o-table':
        return 'Table';
      case 'o-table-renderers':
        return 'Ejemplo de renderes básicos';

      case 'o-table-aggregate':
        return 'Ejemplo de tabla de totales';
    }


  }


  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      filter: this.quickFilterToggle.checked,
      filterCaseSensitive: this.filterCaseSensitive.checked,
      title: this.tableTitle.nativeElement.value,
      exportButtonToggle: this.exportButtonToggle.checked,
      selectMultipleToggle: this.selectMultipleToggle.checked,
      buttonAddToggle: this.buttonAddToggle.checked,
      buttonRemoveToggle: this.buttonRemoveToggle.checked,
      buttonRefreshToggle: this.buttonRefreshToggle.checked,
      showTextToggle: this.showTextToggle.checked,
      paginationToggle: this.paginationToggle.checked

    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);

  }


  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

}
