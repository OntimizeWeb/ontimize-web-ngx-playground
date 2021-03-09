import { Component } from '@angular/core';

const LISTPICKER_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()" [data]="getValue()" filter="yes" 
      value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
        <listpicker-custom-render></listpicker-custom-render>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_TS_DATA = `
  @Component({
    selector: 'input-listpicker-custom-render',
    templateUrl: './input-listpicker-custom-render.component.html'
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
  selector: 'input-listpicker-custom-render',
  templateUrl: './input-listpicker-custom-render.component.html'
})
export class InputListpickerCustomRenderComponent {

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
