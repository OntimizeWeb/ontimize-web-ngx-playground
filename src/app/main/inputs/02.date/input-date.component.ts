import { Component } from '@angular/core';

const DATE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-date-input attr="date" label="Date" [data]="getValue()"></o-date-input>

    <o-date-input attr="date2" label="Date" [data]="getValue()" read-only="no" format="LL" required="yes" min="01/01/1980" max="01/01/2020"
      tooltip="This is an awesome tooltip!"></o-date-input>

    <o-date-input attr="date3" label="Date" enabled="no" [data]="getValue()"></o-date-input>

  </o-form>
`;

const DATE_TS_DATA = `
  @Component({
    selector: 'input-date',
    templateUrl: 'input-date.component.html'
  })
  export class InputDateComponent {

    protected dateValue: Date = new Date();

    getValue() {
      return this.dateValue;
    }

  }
`;

@Component({
  selector: 'input-date',
  templateUrl: 'input-date.component.html'
})
export class InputDateComponent {

  files = {
    'html': {
      'data': DATE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': DATE_TS_DATA
    }
  };

  protected dateValue: Date = new Date();

  getValue() {
    return this.dateValue;
  }

}
