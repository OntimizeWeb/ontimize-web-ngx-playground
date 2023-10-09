const COMBO_HTML_DATA = `
  <o-form show-header="no">

    <o-combo attr="combo" read-only="yes" label="Select country" [static-data]="countriesArray"
      [data]="selectedCountryCode" value-column="countryCode" columns="countryCode;countryText"
      visible-columns="countryText">
    </o-combo>

    <div fxLayout="row">
      <o-combo attr="combo-editable" label="Select country" [static-data]="countriesArray"
        [data]="selectedCountryCode" value-column="countryCode" columns="countryCode;countryText"
        visible-columns="countryText" required="yes" fxFlex>
      </o-combo>

      <o-combo attr="combo-searchable" label="Select country" [static-data]="countriesArray"
        [data]="selectedCountryCode" value-column="countryCode" columns="countryCode;countryText"
        visible-columns="countryText" required="yes" searchable="yes" fxFlex>
      </o-combo>
    </div>

    <o-combo attr="combo-disabled" label="Select country" enabled="no" [static-data]="countriesArray"
      [data]="selectedCountryCode" value-column="countryCode" columns="countryCode;countryText"
      visible-columns="countryText">
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MULTIPLE = `
  <o-form show-header="no">

    <o-combo attr="combo-multiple" label="Select countries" [static-data]="countriesArray"
      [data]="selectedCountriesCode" value-column="countryCode" columns="countryCode;countryText"
      visible-columns="countryText" required="yes" multiple="yes" fxFlex>
    </o-combo>

    <o-combo attr="combo-multiple-trigger-label" label="Select countries" [static-data]="countriesArray"
      [data]="selectedCountriesCode" value-column="countryCode" columns="countryCode;countryText"
      visible-columns="countryText" required="yes" multiple="yes" multiple-trigger-label="yes">
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MORE_INPUTS = `
  <o-form show-header="no">

    <o-combo attr="combo-null-selection" label="Select country" [static-data]="countriesArray"
      [data]="selectedCountryCode" value-column="countryCode" columns="countryCode;countryText"
      visible-columns="countryText" [data]="19487" required="yes" null-selection="no">
    </o-combo>

    <o-combo attr="combo-translate" label="Select value" [static-data]="translationsArray"
      [data]="selectedTranslationCode" value-column="itemCode" columns="itemCode;itemTranslationKey"
      visible-columns="itemTranslationKey" [data]="19487" required="yes" translate="yes">
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_CURRENCY_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select value" [static-data]="integersArray" [data]="selectedIntegerCode"
      value-column="integerCode" columns="integerCode;integerValue" visible-columns="integerValue" required="yes"
      fxFlex>
      <o-combo-renderer-currency></o-combo-renderer-currency>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_REAL_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select value" [static-data]="integersArray" [data]="selectedIntegerCode"
      value-column="integerCode" columns="integerCode;integerValue" visible-columns="integerValue" required="yes"
      fxFlex>
      <o-combo-renderer-real></o-combo-renderer-real>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_INTEGER_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select value" [static-data]="integersArray" [data]="selectedIntegerCode"
      value-column="integerCode" columns="integerCode;integerValue" visible-columns="integerValue" required="yes"
      fxFlex>
      <o-combo-renderer-integer></o-combo-renderer-integer>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_BOOLEAN_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select value" [static-data]="booleanArray" [data]="selectedBooleanCode"
      value-column="booleanCode" columns="booleanCode;booleanValue" visible-columns="booleanValue" required="yes"
      fxFlex>
      <o-combo-renderer-boolean boolean-type="number" render-true-value="Yes" render-false-value="No">
      </o-combo-renderer-boolean>
    </o-combo>

    <o-combo attr="combo-string" label="Select value" [static-data]="booleanArray" [data]="selectedBooleanString"
      value-column="booleanString" columns="booleanString;booleanValue" visible-columns="booleanValue"
      required="yes" fxFlex>
      <o-combo-renderer-boolean boolean-type="string" true-value="trueString" false-value="falseString"
        render-true-value="True" render-false-value="False">
      </o-combo-renderer-boolean>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_PERCENTAGE_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select value" [static-data]="percentagesArray" [data]="selectedPercentageCode"
      value-column="percentageCode" columns="percentageCode;percentageValue" visible-columns="percentageValue"
      required="yes" fxFlex>
      <o-combo-renderer-percentage value-base="100"></o-combo-renderer-percentage>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_DATE_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select date" [static-data]="datesArray" [data]="selectedDateCode"
      value-column="dateCode" columns="dateCode;dateValue" visible-columns="dateValue" required="yes" fxFlex>
      <o-combo-renderer-date format="YYYY-MM-DD"></o-combo-renderer-date>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_CUSTOM_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo" label="Select custom value" [static-data]="integersArray" [data]="selectedIntegerCode"
      value-column="integerCode" columns="integerCode;integerValue" visible-columns="integerValue" required="yes"
      fxFlex>
      <combo-custom-render></combo-custom-render>
    </o-combo>

  </o-form>
`;

const COMBO_HTML_DATA_MULTIPLE_CUSTOM_RENDER = `
  <o-form show-header="no">

    <o-combo attr="combo-editable-multiple-search" label="Select custom values" [static-data]="integersArray"
      [data]="selectedIntegerValues" value-column="integerCode" columns="integerCode;integerValue"
      visible-columns="integerValue" required="yes" multiple="yes" fxFlex>
      <combo-custom-render></combo-custom-render>
    </o-combo>
  
  </o-form>
`;

const COMBO_HTML_DATA_LOCKER = `
  <o-form service="customers" entity="customer" show-header="no"
    keys="CUSTOMERID" keys-sql-types="INTEGER">

    <o-combo attr="combo-locker" oLocker label="Select customer" 
      service="customers" entity="customer" value-column="CUSTOMERID"
      columns="CUSTOMERID;NAME;SURNAME" visible-columns="SURNAME;NAME" separator=", " fxFlex>
    </o-combo>
  </o-form>
`;

const COMBO_HTML_DATA_LOCKER_DISABLED = `
  <o-form service="customers" entity="customer" show-header="no"
    keys="CUSTOMERID" keys-sql-types="INTEGER">

    <o-combo attr="combo-locker" oLocker oLockerMode="disable" label="Select customer" 
      service="customers" entity="customer" value-column="CUSTOMERID"
      columns="CUSTOMERID;NAME;SURNAME" visible-columns="SURNAME;NAME" separator=", " fxFlex>
    </o-combo>
  </o-form>
`;

const COMBO_HTML_DATA_ICON_RENDER = `
<o-form show-header="no" layout-padding>

  <o-combo attr="combo" label="Select sport" [static-data]="sportsArray"
    [data]="selectedSportCode" value-column="sportCode" columns="sportCode;sportDescription;sportIcon"
    visible-columns="sportDescription" required="yes" fxFlex>
    <o-combo-renderer-icon icon-column="sportIcon" icon-position="right"></o-combo-renderer-icon>
  </o-combo>

</o-form>
`;

const COMBO_HTML_DATA_QUERY_ON_EVENT = `
<o-form show-header="no">
  <o-combo #comboCountry attr="comboCountry" label="Select Country" service-type="DummyService"
  query-method="query" service="comboCountry" entity="comboCountry" value-column="CountryId"
  columns="CountryId,CountryName" visible-columns="CountryName" keys="CountryId">
  </o-combo>
  <o-combo #comboState attr="comboState" label="Select State" service-type="DummyService"
  query-method="query" service="comboState" entity="comboState" value-column="StateId"
  columns="StateID,StateName,CountryId" visible-columns="StateName" keys="StateId" [query-on-event]="comboCountry.onValueChange" parent-keys="CountryId:comboCountry[CountryId]">
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

const COMBO_TS_DATA_MULTIPLE = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

  public selectedCountriesCode = [1, 2];
}
`;

const COMBO_TS_DATA_MORE_INPUTS = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

  public translationsArray = [{
    itemCode: 0,
    itemTranslationKey: 'TRANSLATION_0'
  }, {
    itemCode: 1,
    itemTranslationKey: 'TRANSLATION_1'
  }, {
    itemCode: 2,
    itemTranslationKey: 'TRANSLATION_2'
  }, {
    itemCode: 3,
    itemTranslationKey: 'TRANSLATION_3'
  }];

  public selectedCountryCode = 2;

  public selectedTranslationCode = 2;

  // This entries are present in the en.json bundle file 
  // ...
  // "TRANSLATION_0": "First value",
  // "TRANSLATION_1": "Second value",
  // "TRANSLATION_2": "Third value",
  ...
}
`;

const COMBO_TS_DATA_CUSTOM_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

const COMBO_TS_DATA_BOOLEAN_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public booleanArray = [{
    booleanCode: 0,
    booleanString: 'falseString',
    booleanValue: false
  }, {
    booleanCode: 1,
    booleanString: 'trueString',
    booleanValue: true
  }];

  public selectedBooleanCode = 1;

  public selectedBooleanString = 'trueString';
}
`;

const COMBO_TS_DATA_DATE_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

const COMBO_TS_DATA_PERCENTAGE_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

const COMBO_TS_DATA_MULTIPLE_CUSTOM_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

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

  public selectedIntegerValues = [1, 2];
}
`;

const COMBO_TS_DATA_ICON_RENDERER = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  public sportsArray = [{
    sportCode: 0,
    sportDescription: "Snowboard",
    materialIcon: "snowboarding"
  }, {
    sportCode: 1,
    sportDescription: "Surfing",
    materialIcon: "surfing"
  }, {
    sportCode: 2,
    sportDescription: "Skateboarding",
    materialIcon: "skateboarding"
  }, {
    sportCode: 3,
    sportDescription: "Skiing",
    materialIcon: "downhill_skiing"
  }, {
    sportCode: 4,
    sportDescription: "Paragliding",
    materialIcon: "paragliding"
  }];

  public selectedSportCode = 3;
}
`;

const COMBO_TS_DATA_QUERY_ON_EVENT = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {
}
`;

export class ComboCodeExamples {
  public static files = {
    html: {
      data: COMBO_HTML_DATA
    },
    typescript: {
      data: COMBO_TS_DATA
    }
  };

  public static files_multiple = {
    html: {
      data: COMBO_HTML_DATA_MULTIPLE
    },
    typescript: {
      data: COMBO_TS_DATA_MULTIPLE
    }
  };

  public static files_more_inputs = {
    html: {
      data: COMBO_HTML_DATA_MORE_INPUTS
    },
    typescript: {
      data: COMBO_TS_DATA_MORE_INPUTS
    }
  };

  public static files_custom_render = {
    html: {
      data: COMBO_HTML_DATA_CUSTOM_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_CUSTOM_RENDERER
    }
  };

  public static files_currency_render = {
    html: {
      data: COMBO_HTML_DATA_CURRENCY_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_CUSTOM_RENDERER
    }
  };

  public static files_integer_render = {
    html: {
      data: COMBO_HTML_DATA_INTEGER_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_CUSTOM_RENDERER
    }
  };

  public static files_percentage_render = {
    html: {
      data: COMBO_HTML_DATA_PERCENTAGE_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_PERCENTAGE_RENDERER
    }
  };

  public static files_date_render = {
    html: {
      data: COMBO_HTML_DATA_DATE_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_DATE_RENDERER
    }
  };

  public static files_real_render = {
    html: {
      data: COMBO_HTML_DATA_REAL_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_CUSTOM_RENDERER
    }
  };

  public static files_boolean_render = {
    html: {
      data: COMBO_HTML_DATA_BOOLEAN_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_BOOLEAN_RENDERER
    }
  };

  public static files_icon_render = {
    html: {
      data: COMBO_HTML_DATA_ICON_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_ICON_RENDERER
    }
  };

  public static files_multiple_custom_render = {
    html: {
      data: COMBO_HTML_DATA_MULTIPLE_CUSTOM_RENDER
    },
    typescript: {
      data: COMBO_TS_DATA_MULTIPLE_CUSTOM_RENDERER
    }
  };

  public static files_combo_locker = {
    html: {
      data: COMBO_HTML_DATA_LOCKER
    }
  };

  public static files_combo_locker_disabled = {
    html: {
      data: COMBO_HTML_DATA_LOCKER_DISABLED
    }
  };

  public static files_combo_query_on_event = {
    html: {
      data: COMBO_HTML_DATA_QUERY_ON_EVENT
    },
    typescript: {
      data: COMBO_TS_DATA_QUERY_ON_EVENT
    }
  };

}

