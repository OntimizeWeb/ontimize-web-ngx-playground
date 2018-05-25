import { Component } from '@angular/core';

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

const COMBO_TS_DATA = `
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

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})

export class InputComboComponent {

  files = {
    'html': {
      'data': COMBO_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': COMBO_TS_DATA
    }
  };

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

}
