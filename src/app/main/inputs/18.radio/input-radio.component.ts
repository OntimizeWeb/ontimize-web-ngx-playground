import { Component } from '@angular/core';

const RADIO_HTML_DATA = `
  <o-form editable-detail="false" show-header="no">

    <o-radio attr="radio" label="Radio" [static-data]="getDataArray()" [data]="getValue()"
      value-column="key" columns="key;value" visible-columns="value"></o-radio>

    <o-row>
      <o-radio attr="radio-editable" label="Radio" [static-data]="getDataArray()"
        [data]="getValue()" value-column="key" columns="key;value" visible-columns="value" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" tooltip-position="below"></o-radio>

      <o-radio attr="radio-editable" label="Radio" [static-data]="getDataArray()"
        [data]="getValue()" value-column="key" columns="key;value" visible-columns="value" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" tooltip-position="below" layout="row"></o-radio>
    </o-row>

    <o-radio attr="radio-disabled" label="Radio" [static-data]="getDataArray()"
      [data]="getValue()" value-column="key" columns="key;value" visible-columns="value" enabled="no"></o-radio>

  </o-form>
`;

const RADIO_TS_DATA = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'input-radio',
    templateUrl: './input-radio.component.html'
  })
  export class InputRadioComponent {

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
      return 2;
    }

  }
`;

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html'
})
export class InputRadioComponent {

  files = {
    'html': {
      'data': RADIO_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': RADIO_TS_DATA
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
    return 2;
  }

}
