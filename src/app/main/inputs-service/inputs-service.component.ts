import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { OComboComponent, OTranslateService, OListPickerComponent } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';;

const COMBO_HTML_DATA = `
<o-combo attr="combo" label="o-combo (read-only)" layout-padding [static-data]="getDataArray()"
  value-column="key" columns="key;value" visible-columns="value" query-on-init="no"
  query-on-bind="no">
</o-combo>

<o-combo #combo attr="combo-editable" label="o-combo" layout-padding style="min-width:200px;"
  [static-data]="getDataArray()" value-column="key" columns="key;value" visible-columns="value"
  query-on-init="no" query-on-bind="no">
</o-combo>

<o-combo attr="combo-disabled" label="o-combo-disabled (read-only)" enabled="no"
  layout-padding [static-data]="getDataArray()" value-column="key" columns="key;value"
  visible-columns="value" query-on-init="no" query-on-bind="no">
</o-combo>
`;

const COMBO_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'combo-home',
  styleUrls: ['combo-home.component.scss'],
  templateUrl: 'combo-home.component.html'
})
export class ComboHomeComponent {

  @ViewChild('combo') combo: OComboComponent;

  constructor() {
  }

  ngAfterViewInit() {
  }

  getDataArray() {
    let array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': 'Spain'
    });
    array.push({
      'key': 2,
      'value': 'United States'
    });
    array.push({
      'key': 3,
      'value': 'United Kingdom'
    });
    array.push({
      'key': 4,
      'value': 'Germany'
    });
    return array;
  }

  getValue() {
    return 1;
  }
}`;

const LISTPICKER_HTML_DATA = `
<o-list-picker attr="listpicker" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="yes" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>

<o-list-picker #listpicker attr="listpicker2" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="yes" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>

<o-list-picker attr="listpicker3" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="no" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>
`;

const LISTPICKER_TYPESCRIPT_DATA = `
getDataArray() {
  let array: Array<Object> = [];
  array.push({
    'key': 1,
    'value': 'Spain'
  });
  array.push({
    'key': 2,
    'value': 'United States'
  });
  array.push({
    'key': 3,
    'value': 'United Kingdom'
  });
  array.push({
    'key': 4,
    'value': 'Germany'
  });
  return array;
}

getValue() {
  return 1;
}
`;

@Component({
  selector: 'app-inputs-service',
  templateUrl: './inputs-service.component.html',
  styleUrls: ['./inputs-service.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.inputs-service]': 'true'
  }
})
export class InputsServiceComponent implements OnInit, AfterViewInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }


  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('COMBO');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {
  }

  getDataArray() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': 'Spain'
    });
    array.push({
      'key': 2,
      'value': 'United States'
    });
    array.push({
      'key': 3,
      'value': 'United Kingdom'
    });
    array.push({
      'key': 4,
      'value': 'Germany'
    });
    return array;
  }

  getValue() {
    return 1;
  }

  getFiles(key: string) {
    let result = {
      'html': {
        'data': undefined
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': undefined
      }
    };

    switch (key) {
      case 'combo':
      result.html.data = COMBO_HTML_DATA;
      result.typescript.data = COMBO_TYPESCRIPT_DATA;
        break;
      case 'listpicker':
      result.html.data = LISTPICKER_HTML_DATA;
      result.typescript.data = LISTPICKER_TYPESCRIPT_DATA;
        break;
    }
    return result;
  }

  onListPickerChange(value: any, listPicker: OListPickerComponent) {
    console.log(value);
    console.log(listPicker.getSelectedRecord());
  }
}
