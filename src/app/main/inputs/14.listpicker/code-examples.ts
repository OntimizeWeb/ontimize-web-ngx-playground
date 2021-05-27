const LISTPICKER_HTML_DATA = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker-readOnly" read-only="yes" label="Select country"
      [static-data]="countriesArray" [data]="selectedCountryCode" value-column="countryCode"
      columns="countryCode;countryText" visible-columns="countryText">
    </o-list-picker>

    <o-list-picker attr="listpicker" label="Select country - Custom Render"
      [static-data]="countriesArray" [data]="selectedCountryCode" value-column="countryCode"
      columns="countryCode;countryText" visible-columns="countryText" required="true">
    </o-list-picker>

    <o-list-picker attr="listpicker-disabled" label="Select country" [static-data]="countriesArray"
      [data]="selectedCountryCode" enabled="no" value-column="countryCode"
      columns="countryCode;countryText" visible-columns="countryText">
    </o-list-picker>

  </o-form>
`;

const LISTPICKER_HTML_DATA_CURRENCY_RENDER = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker" label="Select value" [static-data]="integersArray"
      [data]="selectedIntegerCode" value-column="integerCode" columns="integerCode;integerValue"
      visible-columns="integerValue" required="true">
      <o-list-picker-renderer-currency></o-list-picker-renderer-currency>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_REAL_RENDER = `
  <o-form show-header="no">

  <o-list-picker attr="listpicker" label="Select value" [static-data]="integersArray"
    [data]="selectedIntegerCode" value-column="integerCode" columns="integerCode;integerValue"
    visible-columns="integerValue" required="true">
    <o-list-picker-renderer-real></o-list-picker-renderer-real>
  </o-list-picker>

  </o-form>
`;

const LISTPICKER_HTML_DATA_INTEGER_RENDER = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker" label="Select value" [static-data]="integersArray"
      [data]="selectedIntegerCode" value-column="integerCode" columns="integerCode;integerValue"
      visible-columns="integerValue" required="true">
      <o-list-picker-renderer-integer></o-list-picker-renderer-integer>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_PERCENTAGE_RENDER = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker" label="Select value" [static-data]="percentagesArray"
      [data]="selectedPercentageCode" value-column="percentageCode"
      columns="percentageCode;percentageValue" visible-columns="percentageValue" required="true">
      <o-list-picker-renderer-percentage value-base="100"></o-list-picker-renderer-percentage>
    </o-list-picker>

  </o-form>
`;

const LISTPICKER_HTML_DATA_DATE_RENDER = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker" label="Select date" [static-data]="datesArray"
      [data]="selectedDateCode" value-column="dateCode" columns="dateCode;dateValue"
      visible-columns="dateValue" required="true">
      <o-list-picker-renderer-date format="YYYY-MM-DD"></o-list-picker-renderer-date>
    </o-list-picker>
    
  </o-form>
`;

const LISTPICKER_HTML_DATA_CUSTOM_RENDER = `
  <o-form show-header="no">

    <o-list-picker attr="listpicker" label="Select value" [static-data]="integersArray"
      [data]="selectedIntegerCode" value-column="integerCode" columns="integerCode;integerValue"
      visible-columns="integerValue" required="true">
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

    public countriesArray = [{
      countryCode: 1,
      countryText: 'Spain'
    }, {
      countryCode: 2,
      countryText: 'United States'
    }, {
      countryCode: 3,
      countryText: 'United Kingdom'
    }, {
      countryCode: 4,
      countryText: 'Germany'
    }, {
      countryCode: 5,
      countryText: 'Portugal'
    }, {
      countryCode: 6,
      countryText: 'France'
    }, {
      countryCode: 7,
      countryText: 'Italy'
    }, {
      countryCode: 8,
      countryText: 'Belgium'
    }, {
      countryCode: 9,
      countryText: 'Greece'
    }, {
      countryCode: 10,
      countryText: 'Finland'
    }];

    public selectedCountryCode = 2;

  }
`;

const LISTPICKER_TS_DATA_CUSTOM_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    public integersArray = [{
      integerCode: 1,
      integerValue: '1615472370'
    }, {
      integerCode: 2,
      integerValue: '1515472370'
    }, {
      integerCode: 3,
      integerValue: '1415472370'
    }, {
      integerCode: 4,
      integerValue: '1215472370'
    }, {
      integerCode: 5,
      integerValue: '1115472370'
    }];
    
    public selectedIntegerCode = 2;

  }
`;

const LISTPICKER_TS_DATA_DATE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {
    
    public datesArray = [{
      dateCode: 0,
      dateValue: "10/05/2005"
    }, {
      dateCode: 1,
      dateValue: "04/03/1980"
    }, {
      dateCode: 2,
      dateValue: "24/08/2011"
    }, {
      dateCode: 3,
      dateValue: "01/12/1980"
    }, {
      dateCode: 4,
      dateValue: "30/01/2016"
    }];

    public selectedDateCode = 3;


  }
`;

const LISTPICKER_TS_DATA_PERCENTAGE_RENDER = `
  @Component({
    selector: 'input-listpicker',
    templateUrl: './input-listpicker.component.html'
  })
  export class InputListpickerComponent {

    public percentagesArray = [{
      percentageCode: 16,
      percentageValue: "16"
    }, {
      percentageCode: 23,
      percentageValue: "23"
    }, {
      percentageCode: 45,
      percentageValue: "45"
    }, {
      percentageCode: 68,
      percentageValue: "68"
    }, {
      percentageCode: 97,
      percentageValue: "97"
    }];

    public selectedPercentageCode = 16;

  }
`;

const LISTPICKER_HTML_DATA_LOCKER = `
  <o-form service="customers" entity="customer" show-header="no"
    keys="CUSTOMERID" keys-sql-types="INTEGER">

    <o-list-picker attr="combo-locker" oLocker label="Select customer" 
      service="customers" entity="customer" value-column="CUSTOMERID"
      columns="CUSTOMERID;NAME;SURNAME" visible-columns="SURNAME;NAME" separator=", " fxFlex>
    </o-list-picker>

  </o-form>
`;

const LISTPICKER_HTML_DATA_LOCKER_DISABLED = `
  <o-form service="customers" entity="customer" show-header="no"
    keys="CUSTOMERID" keys-sql-types="INTEGER">

    <o-list-picker attr="combo-locker" oLocker oLockerMode="disable" label="Select customer" 
      service="customers" entity="customer" value-column="CUSTOMERID"
      columns="CUSTOMERID;NAME;SURNAME" visible-columns="SURNAME;NAME" separator=", " fxFlex>
    </o-list-picker>
    
  </o-form>
`;

export class ListPickerCodeExamples {

  public static files = {
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

  public static files_custom_render = {
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

  public static files_percentage_render = {
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

  public static files_real_render = {
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

  public static files_integer_render = {
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

  public static files_currency_render = {
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

  public static files_date_render = {
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

  public static files_listpicker_locker = {
    'html': {
      'data': LISTPICKER_HTML_DATA_LOCKER
    }
  };

  public static files_listpicker_locker_disabled = {
    'html': {
      'data': LISTPICKER_HTML_DATA_LOCKER_DISABLED
    }
  };
}
