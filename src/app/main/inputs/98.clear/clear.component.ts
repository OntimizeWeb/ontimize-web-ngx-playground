import { Component } from '@angular/core';

const CLEAR_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input #input attr="text" label="Text" [data]="getValueText()" read-only="no" clear-button="yes"></o-text-input>

    <o-date-input #date attr="date" label="Date" [data]="getValueDate()" read-only="no" format="LL" clear-button="yes"></o-date-input>

    <o-currency-input #curr attr="currency" label="Currency" [data]="getValueCurr()" read-only="no" clear-button="yes" step="1"></o-currency-input>

  </o-form>
`;

const CLEAR_TS_DATA = `
  @Component({
    selector: 'clear',
    templateUrl: './clear.component.html'
  })
  export class ClearComponent {

    getValueText() {
      return 'John Doe';
    }

    protected dateValue: Date = new Date();

    getValueDate() {
      return this.dateValue;
    }

    getValueCurr() {
      return 2574.99;
    }

  }
`;

@Component({
  selector: 'clear',
  templateUrl: './clear.component.html'
})
export class ClearComponent {

  files = {
    'html': {
      'data': CLEAR_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': CLEAR_TS_DATA
    }
  };

  getValueText() {
    return 'John Doe';
  }

  protected dateValue: Date = new Date();

  getValueDate() {
    return this.dateValue;
  }

  getValueCurr() {
    return 2574.99;
  }




}
