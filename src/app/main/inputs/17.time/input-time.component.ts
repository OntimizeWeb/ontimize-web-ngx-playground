import { Component } from '@angular/core';

const HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-time-input attr="input" label="Time" date-placeholder="mm/dd/yyyy" hour-placeholder="hh:mm"
      [data]="getValue()"></o-time-input>

    <o-time-input attr="input2" [data]="getValue()" read-only="no" required="yes" clear-button="yes" label="Time"
      date-placeholder="mm/dd/yyyy" hour-placeholder="hh:mm"></o-time-input>

    <o-time-input attr="input3" label="Time" enabled="no" [data]="getValue()" date-placeholder="mm/dd/yyyy"
      hour-placeholder="hh:mm"></o-time-input>

  </o-form>
`;

const TS_DATA = `
@Component({
  selector: 'input-time',
  templateUrl: 'input-time.component.html'
})
export class InputTimeComponent {

  public getValue(): any {
    return 1535353788828;
  }

}
`;

@Component({
  selector: 'input-time',
  templateUrl: 'input-time.component.html'
})
export class InputTimeComponent {

  public files = {
    html: {
      data: HTML_DATA
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: TS_DATA
    }
  };

  public getValue(): any {
    return 1535353788828;
  }

}
