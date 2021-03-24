import { Component } from '@angular/core';

const LISTPICKER_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker attr="listpicker" label="List Picker" [static-data]="dataArray" [data]="value" filter="yes" value-column="key"
      columns="key;value" visible-columns="value"></o-list-picker>

    <o-list-picker #listpicker attr="listpicker2" label="List Picker" [static-data]="dataArray" [data]="value" filter="yes"
      value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false"></o-list-picker>

    <o-list-picker attr="listpicker3" label="List Picker" [static-data]="dataArray" [data]="value" enabled="no" filter="yes"
      value-column="key" columns="key;value" visible-columns="value"></o-list-picker>

  </o-form>
`;

const LISTPICKER_HTML_DATA_PERCENTAGE_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-percentage></o-listpicker-renderer-percentage>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_CURRENCY_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-currency></o-listpicker-renderer-currency>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_REAL_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-real></o-listpicker-renderer-real>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_INTEGER_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-integer></o-listpicker-renderer-integer>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_DATE_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
      <o-listpicker-renderer-date format="YYYY-MM-DD"></o-listpicker-renderer-date>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_CUSTOM_RENDER = `
  <o-form editable-detail="false" show-header="no" layout-direction="column">

    <o-list-picker #listpicker attr="listpicker" [static-data]="dataArray"
      [data]="value" filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false">
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

    public dataArray: Object[] = [{
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

    public value : any = 1;

  }
`;

const LISTPICKER_TS_DATA_CUSTOM_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {
    public dataArray: Object[] = [{
      key: 1,
      value: '1615363293'
    }, {
      key: 2,
      value: '1415363293'
    }, {
      key: 3,
      value: '1315363293'
    }, {
      key: 4,
      value: '1215363293'
    }];
    
    public value:any = 1;

  }
`;

const LISTPICKER_TS_DATA_DATE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {
    public dataArray: Object[] = [{
      key: 1,
      value: '15/06/2005'
    }, {
      key: 2,
      value: '10/05/2015'
    }, {
      key: 3,
      value: '22/10/2009'
    }, {
      key: 4,
      value: '01/11/2002'
    }];

    public value: any = 1;

  }
`;

const LISTPICKER_TS_DATA_PERCENTAGE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    public dataArray: Object[] = [{
      key: 1,
      value: '16'
    }, {
      key: 2,
      value: '23'
    }, {
      key: 3,
      value: '56'
    }, {
      key: 4,
      value: '87'
    }];

    public value: any = 16;

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

  public dataArray: Object[] = [{
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

  public dataArrayCustomRenderer: Object[] = [{
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

  public dataArrayDateRenderer: Object[] = [{
    key: 1,
    value: '15/06/2005'
  }, {
    key: 2,
    value: '10/05/2015'
  }, {
    key: 3,
    value: '22/10/2009'
  }, {
    key: 4,
    value: '01/11/2002'
  }];

  public dataArrayPercentageRenderer: Object[] = [{
    key: 16,
    value: "16"
  }, {
    key: 23,
    value: "23"
  }, {
    key: 45,
    value: "45"
  }, {
    key: 68,
    value: "68"
  }, {
    key: 97,
    value: "97"
  }];

  public value: any = 1;

  public valuePercentage: any = 16;

}
