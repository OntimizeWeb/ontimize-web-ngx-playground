import { Component } from '@angular/core';

const DATE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-date-input attr="date" label="Date (read-only)" [data]="getValue()" layout-padding></o-date-input>

      <o-date-input attr="date2" label="Date (edit mode)" [data]="getValue()" read-only="no" format="LL" required="yes" min="01/01/1980"
        max="01/01/2020" tooltip="This is an awesome tooltip!" layout-padding></o-date-input>

      <o-date-input attr="date3" label="Date (disabled)" enabled="no" [data]="getValue()" layout-padding></o-date-input>

    </div>
  </o-form>
`;

const DATE_TS_DATA = `
  getValue() {
    return new Date();
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
