import { Component } from '@angular/core';

const CURRENCY_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-currency-input attr="currency" label="Currency (read-only)" [data]="getValue()" decimal-digits="2" min-decimal-digits="2"
        max-decimal-digits="2" layout-padding></o-currency-input>

      <o-currency-input attr="currency2" label="Currency (edit mode)" [data]="getValue()" read-only="no" decimal-digits="2" required="yes"
        min-decimal-digits="2" max-decimal-digits="2" tooltip="This is an awesome tooltip!" layout-padding></o-currency-input>

      <o-currency-input attr="currency3" label="Currency (disabled)" enabled="no" [data]="getValue()" decimal-digits="2" min-decimal-digits="2"
        max-decimal-digits="2" layout-padding></o-currency-input>

    </div>
  </o-form>
`;

const CURRENCY_TS_DATA = `
  getValue() {
    return 2574.99;
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
