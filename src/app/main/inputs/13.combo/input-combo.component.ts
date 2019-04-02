import { Component } from '@angular/core';

const COMBO_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-combo attr="combo" label="Combo" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key" columns="key;value"
      visible-columns="value"></o-combo>

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
    
    public array: Array<Object> = [{
      'key': 1,
      'value': 'Spain'
    }, {
      'key': 2,
      'value': 'United States'
    }, {
      'key': 3,
      'value': 'United Kingdom'
    }, {
      'key': 4,
      'value': 'Germany'
    }];

    getValueSimple() {
      return 2;
    }

    getDataArray() {
      return this.array;
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

    public multipleValue = [1, 2];
    public array: Array<Object> = [{
      'key': 1,
      'value': 'Spain'
    }, {
      'key': 2,
      'value': 'United States'
    }, {
      'key': 3,
      'value': 'United Kingdom'
    }, {
      'key': 4,
      'value': 'Germany'
    }];

    getValueMultiple() {
      return this.multipleValue;
    }

    getDataArray() {
      return this.array;
    }

  }
`;

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {


  public array: Array<Object> = [{
    'key': 1,
    'value': 'Spain'
  }, {
    'key': 2,
    'value': 'United States'
  }, {
    'key': 3,
    'value': 'United Kingdom'
  }, {
    'key': 4,
    'value': 'Germany'
  }];

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
    return this.array;
  }

  multipleValue = [1, 2];

  getValueSimple() {
    return 2;
  }

  getValueMultiple() {
    return this.multipleValue;
  }

}
