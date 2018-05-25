import { Component } from '@angular/core';

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

const LISTPICKER_TS_DATA = `
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
  selector: 'input-listpicker',
  templateUrl: './input-listpicker.component.html'
})
export class InputListpickerComponent {

  files = {
    'html': {
      'data': LISTPICKER_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA
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
