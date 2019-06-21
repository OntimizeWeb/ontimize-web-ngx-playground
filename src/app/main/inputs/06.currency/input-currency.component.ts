import { Component } from '@angular/core';

const CURRENCY_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-currency-input attr="currency" label="Currency" [data]="getValue()" 
      min-decimal-digits="2" max-decimal-digits="2"></o-currency-input>

    <o-currency-input attr="currency2" label="Currency" [data]="getValue()" read-only="no"  required="yes"
      min-decimal-digits="2" max-decimal-digits="2" ></o-currency-input>

    <o-currency-input attr="currency3" label="Currency" enabled="no" [data]="getValue()" min-decimal-digits="2"
      max-decimal-digits="2"></o-currency-input>

  </o-form>
`;

const CURRENCY_TS_DATA = `
  @Component({
    selector: 'input-currency',
    templateUrl: 'input-currency.component.html'
  })
  export class InputCurrencyComponent {

    getValue() {
      return 2574.99;
    }

  }
`;

@Component({
  selector: 'input-currency',
  templateUrl: 'input-currency.component.html'
})
export class InputCurrencyComponent {

  files = {
    'html': {
      'data': CURRENCY_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': CURRENCY_TS_DATA
    }
  };

  getValue() {
    return 2574.99;
  }

}
