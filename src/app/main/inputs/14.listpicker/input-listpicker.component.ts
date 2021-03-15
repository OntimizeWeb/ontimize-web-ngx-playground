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

const LISTPICKER_HTML_DATA_PERCENTAGE_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-percentage></o-listpicker-renderer-percentage>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_CURRENCY_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-currency></o-listpicker-renderer-currency>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_REAL_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-real></o-listpicker-renderer-real>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_INTEGER_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-integer></o-listpicker-renderer-integer>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_DATE_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-date format="YYYY-MM-DD"></o-listpicker-renderer-date>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_CUSTOM_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="getDataArray()"
      [data]="getValue()" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <listpicker-custom-render></listpicker-custom-render>
    </o-list-picker>
    
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

const LISTPICKER_TS_DATA_CUSTOM_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    getDataArray() {
      const array: Array<Object> = [];
      array.push({
        'key': 1,
        'value': '1615363293'
      });
      array.push({
        'key': 2,
        'value': '1415363293'
      });
      array.push({
        'key': 3,
        'value': '1315363293'
      });
      array.push({
        'key': 4,
        'value': '1215363293'
      });
      return array;
    }

    getValue() {
      return 1;
    }

  }
`;

const LISTPICKER_TS_DATA_DATE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    getDataArray() {
      const array: Array<Object> = [];
      array.push({
        'key': 1,
        'value': '15/06/2005'
      });
      array.push({
        'key': 2,
        'value': '10/05/2015'
      });
      array.push({
        'key': 3,
        'value': '22/10/2009'
      });
      array.push({
        'key': 4,
        'value': '01/11/2002'
      });
      return array;
    }

    getValue() {
      return 1;
    }

  }
`;

const LISTPICKER_TS_DATA_PERCENTAGE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    getDataArray() {
      const array: Array<Object> = [];
      array.push({
        'key': 16,
        'value': '16'
      });
      array.push({
        'key': 23,
        'value': '23'
      });
      array.push({
        'key': 56,
        'value': '56'
      });
      array.push({
        'key': 87,
        'value': '87'
      });
      return array;
    }

    getValue() {
      return 16;
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

  files_custom_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_CUSTOM_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_CUSTOM_RENDER
    }
  }; 
  
  files_percentage_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_PERCENTAGE_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_PERCENTAGE_RENDER
    }
  }; 

  files_real_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_REAL_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_CUSTOM_RENDER
    }
  }; 

  files_integer_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_INTEGER_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_CUSTOM_RENDER
    }
  }; 
  files_currency_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_CURRENCY_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_CUSTOM_RENDER
    }
  }; 
  files_date_render = {
    'html': {
      'data': LISTPICKER_HTML_DATA_DATE_RENDER
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LISTPICKER_TS_DATA_DATE_RENDER
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

  getDataArrayCustomRenderer() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': '1615363293'
    });
    array.push({
      'key': 2,
      'value': '1415363293'
    });
    array.push({
      'key': 3,
      'value': '1315363293'
    });
    array.push({
      'key': 4,
      'value': '1215363293'
    });
    return array;
  }

  getDataArrayDateRenderer() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': '15/06/2005'
    });
    array.push({
      'key': 2,
      'value': '10/05/2015'
    });
    array.push({
      'key': 3,
      'value': '22/10/2009'
    });
    array.push({
      'key': 4,
      'value': '01/11/2002'
    });
    return array;
  }

  getDataArrayPercentageRenderer() {
    const array: Array<Object> = [];
    array.push({
      'key': 16,
      'value': '16'
    });
    array.push({
      'key': 23,
      'value': '23'
    });
    array.push({
      'key': 56,
      'value': '56'
    });
    array.push({
      'key': 87,
      'value': '87'
    });
    return array;
  }

  getValue() {
    return 1;
  }

  getValuePercentage() {
    return 16;
  }

}
