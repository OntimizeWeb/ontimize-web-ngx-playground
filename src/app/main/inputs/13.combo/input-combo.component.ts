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

const COMBO_HTML_DATA_CUSTOM_RENDER = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-combo attr="combo-editable-search" [static-data]="getDataArray()" [data]="getValueSimple()"
      value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="no" null-selection="no" searchable="yes" fxFlex>
      <combo-custom-render></combo-custom-render>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_BOOLEAN_RENDER = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-combo attr="combo-editable-search" [static-data]="getDataArrayBooleanRenderer()" [data]="getValueBoolean()"
    value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="no" null-selection="no" searchable="yes" fxFlex>
      <o-combo-renderer-boolean boolean-type="boolean" render-true-value="Yes" render-false-value="No"></o-combo-renderer-boolean>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MULTIPLE_CUSTOM_RENDER = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-combo attr="combo-editable-multiple-search" [static-data]="getDataArray()"
      [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="no" multiple="yes"
      null-selection="no" searchable="yes" fxFlex>
      <combo-custom-render></combo-custom-render>
    </o-combo>
  
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

const COMBO_TS_DATA_CUSTOM_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public array: Object[] = [{
    key: 1,
    value: '1615472370'
  }, {
    key: 2,
    value: '1515472370'
  }, {
    key: 3,
    value: '1415472370'
  }, {
    key: 4,
    value: '1215472370'
  }, {
    key: 5,
    value: '1115472370'
  }];

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueSimple(): any {
    return 2;
  }

}
`;

const COMBO_TS_DATA_BOOLEAN_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public array: Object[] = [{
    key: 0,
    value: 0
  }, {
    key: 1,
    value: 1
  }];

  public getDataArrayBooleanRenderer(): any[] {
    return this.array;
  }

  public getValueBoolean(): any {
    return 1;
  }

}
`;

const COMBO_TS_DATA_MULTIPLE_CUSTOM_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public multipleValue = [1, 2];
  public array: Object[] = [{
    key: 1,
    value: '1615363293'
  }, {
    key: 2,
    value: '1415363293'
  }, {
    key: 3,
    value: '1215363293'
  }, {
    key: 4,
    value: '1015363293'
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

  public array_custom_renderer: Object[] = [{
    key: 1,
    value: '1615472370'
  }, {
    key: 2,
    value: '1515472370'
  }, {
    key: 3,
    value: '1415472370'
  }, {
    key: 4,
    value: '1215472370'
  }, {
    key: 5,
    value: '1115472370'
  }];

  public array_boolean_renderer: Object[] = [{
    key: 0,
    value: false
  }, {
    key: 1,
    value: true
  }];

  public array_date_renderer: Object[] = [{
    key: 0,
    value: "10/05/2005"
  }, {
    key: 1,
    value: "04/03/1980"
  }, {
    key: 2,
    value: "24/08/2011"
  }, {
    key: 3,
    value: "01/12/1980"
  }, {
    key: 4,
    value: "30/01/2016"
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

  public files_custom_render = {
    html: {
      data: COMBO_HTML_DATA_CUSTOM_RENDER
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: COMBO_TS_DATA_CUSTOM_RENDERER
    }
  };

  public files_boolean_render = {
    html: {
      data: COMBO_HTML_DATA_BOOLEAN_RENDER
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: COMBO_TS_DATA_BOOLEAN_RENDERER
    }
  };

  public files_multiple_custom_render = {
    html: {
      data: COMBO_HTML_DATA_MULTIPLE_CUSTOM_RENDER
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: COMBO_TS_DATA_MULTIPLE_CUSTOM_RENDERER
    }
  };

  public getDataArray(): any[] {
    return this.array;
  }

  public getDataArrayCustomRenderer(): any[] {
    return this.array_custom_renderer;
  }

  public getDataArrayBooleanRenderer(): any[] {
    return this.array_boolean_renderer;
  }

  public getDataArrayDateRenderer(): any[] {
    return this.array_date_renderer;
  }

  public getValueSimple(): any {
    return 2;
  }

  public getValueBoolean(): any {
    return 1;
  }

  public getValueMultiple(): any[] {
    return this.multipleValue;
  }

}
