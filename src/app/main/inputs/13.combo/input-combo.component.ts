import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OComboComponent } from 'ontimize-web-ngx';

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

const COMBO_HTML_DATA_MULTIPLE = `
<div fxLayout="row wrap">
      <o-combo attr="combo-readonly-multiple" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (read-only)" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" tooltip="This is an awesome tooltip!"
        tooltip-position="below" layout-padding multiple="yes"></o-combo>
      <o-combo #combo attr="combo-editable-multiple" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (edit-mode)" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false"
        layout-padding multiple="yes"></o-combo>
      <o-combo attr="combo-disabled-multiple" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (disabled)" enabled="no" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" layout-padding multiple="yes"></o-combo>
    </div>

    <div fxLayout="row wrap">
      <o-combo attr="combo-readonly-multiple2" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (read-only)" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" tooltip="This is an awesome tooltip!"
        tooltip-position="below" layout-padding multiple="yes" multiple-trigger-label="yes"></o-combo>
      <o-combo #combo attr="combo-editable-multiple2" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (edit-mode)" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false"
        layout-padding multiple="yes" multiple-trigger-label="yes"></o-combo>
      <o-combo attr="combo-disabled-multiple2" label="{{ 'INPUT.COMBOMULTIPLE' | oTranslate }} (disabled)" enabled="no" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" layout-padding multiple="yes"
        multiple-trigger-label="yes"></o-combo>
    </div>
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

}`;


const COMBO_TS_DATA_MULTIPLE = `
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

  multipleValue = [1, 2];
  

  getValueMultiple() {
    return this.multipleValue;
  }

}`;

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})




export class InputComboComponent {
  @ViewChild('combo2')
  combo2: OComboComponent;
  
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

  files_multiple = {
    'html': {
      'data': COMBO_HTML_DATA_MULTIPLE
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': COMBO_TS_DATA_MULTIPLE
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


  multipleValue = [1, 2];
  getValueSimple() {
    return 2;
  }

  getValueMultiple() {
    return this.multipleValue;
  }



}
