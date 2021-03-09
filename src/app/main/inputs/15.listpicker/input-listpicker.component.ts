import { Component } from '@angular/core';

const LISTPICKER_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker attr="listpicker" label="List Picker" [static-data]="getDataArray()" [data]="getValue()" filter="yes" value-column="key"
      columns="key;value" visible-columns="value"></o-list-picker>

    <o-list-picker #listpicker attr="listpicker2" label="List Picker" [static-data]="getDataArray()" [data]="getValue()" filter="yes"
      value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false"></o-list-picker>

    <o-list-picker attr="listpicker3" label="List Picker" [static-data]="getDataArray()" [data]="getValue()" enabled="no" filter="yes"
      value-column="key" columns="key;value" visible-columns="value"></o-list-picker>

  </o-form>
`;

const LISTPICKER_TS_DATA = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

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
