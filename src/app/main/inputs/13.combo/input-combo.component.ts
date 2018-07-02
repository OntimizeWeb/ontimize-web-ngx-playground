import { Component } from '@angular/core';

const COMBO_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-combo attr="combo" label="Combo" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key" columns="key;value"
      visible-columns="value" tooltip="This is an awesome tooltip!" tooltip-position="below"></o-combo>

    <o-combo attr="combo-editable" label="Combo" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key"
      columns="key;value" visible-columns="value" required="yes" read-only="false"></o-combo>

    <o-combo attr="combo-disabled" label="Combo" enabled="no" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key"
      columns="key;value" visible-columns="value"></o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MULTIPLE = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-combo attr="combo-editable-multiple" label="Combo" [static-data]="getDataArray()" [data]="getValueMultiple()" value-column="key"
      columns="key;value" visible-columns="value" required="yes" read-only="false" multiple="yes"></o-combo>

    <o-combo attr="combo-editable-multiple2" label="Combo" [static-data]="getDataArray()" [data]="getValueMultiple()" value-column="key"
      columns="key;value" visible-columns="value" required="yes" read-only="false" multiple="yes" multiple-trigger-label="yes"></o-combo>

  </o-form>
`;

const COMBO_TS_DATA = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'input-combo',
    templateUrl: './input-combo.component.html'
  })
  export class InputComboComponent {

    getValueSimple() {
      return 2;
    }

  }
`;

const COMBO_TS_DATA_MULTIPLE = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'input-combo',
    templateUrl: './input-combo.component.html'
  })
  export class InputComboComponent {

    multipleValue = [1, 2];

    getValueMultiple() {
      return this.multipleValue;
    }

  }
`;

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
