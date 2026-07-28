import { Component } from '@angular/core';

const CURRENCY_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-currency-input attr="currency" label="Currency" [data]="currency"
      min-decimal-digits="2" max-decimal-digits="2"></o-currency-input>

    <o-currency-input attr="currency2" label="Currency" [data]="currency" read-only="no"  required="yes"
      min-decimal-digits="2" max-decimal-digits="2" ></o-currency-input>

    <o-currency-input attr="currency3" label="Currency" enabled="no" [data]="currency" min-decimal-digits="2"
      max-decimal-digits="2"></o-currency-input>

  </o-form>
`;

const CURRENCY_TS_DATA = `
  @Component({
    selector: 'input-currency',
    templateUrl: 'input-currency.component.html'
  })
  export class InputCurrencyComponent {

    protected currency = 2574.99;

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

  protected currency = 2574.99;

}
