import { Component } from '@angular/core';

const COMBO_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-combo attr="combo" label="Combo" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key" columns="key;value"
      visible-columns="value"></o-combo>

    <div fxLayout="row">
      <o-combo attr="combo-editable" label="Combo" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key"
        columns="key;value" visible-columns="value" required="yes" read-only="false"></o-combo>

      <o-combo attr="combo-editable-search" label="Combo with search" [static-data]="getDataArray()" [data]="getValueSimple()"
        value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="no" null-selection="no" searchable="yes">
        </o-combo>
    </div>

    <o-combo attr="combo-disabled" label="Combo" enabled="no" [static-data]="getDataArray()" [data]="getValueSimple()" value-column="key"
      columns="key;value" visible-columns="value"></o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MULTIPLE = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <div fxLayout="row">
      <o-combo attr="combo-editable-multiple" label="Combo multiple" [static-data]="getDataArray()" [data]="getValueMultiple()" value-column="key"
        columns="key;value" visible-columns="value" required="yes" read-only="false" multiple="yes"></o-combo>

      <o-combo attr="combo-editable-multiple-search" label="Combo multiple with search" [static-data]="getDataArray()"
        [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="no" multiple="yes"
        null-selection="no" searchable="yes"></o-combo>
    </div>

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

  public array: Object[] = [{
    key: 1,
    value: 'Spain'
  }, {
    key: 2,
    value: 'United States'
  }, {
    key: 3,
    value: 'United Kingdom'
  }, {
    key: 4,
    value: 'Germany'
  }, {
    key: 5,
    value: 'Portugal'
  }, {
    key: 6,
    value: 'France'
  }, {
    key: 7,
    value: 'Italy'
  }, {
    key: 8,
    value: 'Belgium'
  }, {
    key: 9,
    value: 'Greece'
  }, {
    key: 10,
    value: 'Finland'
  }];

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueSimple(): any {
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

  public multipleValue = [1, 2];
  public array: Object[] = [{
    key: 1,
    value: 'Spain'
  }, {
    key: 2,
    value: 'United States'
  }, {
    key: 3,
    value: 'United Kingdom'
  }, {
    key: 4,
    value: 'Germany'
  }, {
    key: 5,
    value: 'Portugal'
  }, {
    key: 6,
    value: 'France'
  }, {
    key: 7,
    value: 'Italy'
  }, {
    key: 8,
    value: 'Belgium'
  }, {
    key: 9,
    value: 'Greece'
  }, {
    key: 10,
    value: 'Finland'
  }];

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueMultiple(): any[] {
    return this.multipleValue;
  }

}
`;

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public multipleValue = [1, 2];
  public array: Object[] = [{
    key: 1,
    value: 'Spain'
  }, {
    key: 2,
    value: 'United States'
  }, {
    key: 3,
    value: 'United Kingdom'
  }, {
    key: 4,
    value: 'Germany'
  }, {
    key: 5,
    value: 'Portugal'
  }, {
    key: 6,
    value: 'France'
  }, {
    key: 7,
    value: 'Italy'
  }, {
    key: 8,
    value: 'Belgium'
  }, {
    key: 9,
    value: 'Greece'
  }, {
    key: 10,
    value: 'Finland'
  }];

  public files = {
    html: {
      data: COMBO_HTML_DATA
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: COMBO_TS_DATA
    }
  };

  public files_multiple = {
    html: {
      data: COMBO_HTML_DATA_MULTIPLE
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: COMBO_TS_DATA_MULTIPLE
    }
  };

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueSimple(): any {
    return 2;
  }

  public getValueMultiple(): any[] {
    return this.multipleValue;
  }

}
