import { Component } from '@angular/core';

const HOUR_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-hour-input fxFlex attr="input" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="hour" value-type="string"></o-hour-input>

    <o-hour-input attr="input2" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="hour" read-only="no" required="yes" clear-button="yes"
      format="24" value-type="string"></o-hour-input>

    <o-hour-input attr="input3" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" enabled="no" [data]="hour" value-type="string"></o-hour-input>

  </o-form>
`;

const HOUR_HTML_DATA_FORMAT = `
  <o-form editable-detail="no" show-header="no" layout-direction="row" layout-align="space-between center">

    <o-hour-input attr="formatinput" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="hour" read-only="no" format="12"
      value-type="string"></o-hour-input>

    <o-hour-input attr="formatinput2" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="hour" read-only="no" format="24"
      value-type="string"></o-hour-input>

  </o-form>
`;

const HOUR_HTML_DATA_VALUETYPE = `
  <o-form editable-detail="no" show-header="no" layout-direction="row" layout-align="space-between center">

    <o-hour-input attr="valueTypeInput" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="hour" read-only="no" value-type="string">
    </o-hour-input>

    <o-hour-input value-type="timestamp" attr="valueTypeInput2" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="timestamp"
      read-only="no"></o-hour-input>

  </o-form>
`;

const HOUR_TS_DATA = `
@Component({
  selector: 'input-hour',
  templateUrl: 'input-hour.component.html'
})
export class InputHourComponent {

  protected hour = '05:00 PM';

}
`;

const TIMESTAMP_TS_DATA = `
@Component({
  selector: 'input-hour',
  templateUrl: 'input-hour.component.html'
})
export class InputHourComponent {

  protected hour = '05:00 PM';

  protected timestamp = 1542975966197;

}
`;

@Component({
  selector: 'input-hour',
  templateUrl: 'input-hour.component.html'
})
export class InputHourComponent {

  public files = {
    html: {
      data: HOUR_HTML_DATA
    },
    typescript: {
      data: HOUR_TS_DATA
    }
  };

  public formatFiles = {
    html: {
      data: HOUR_HTML_DATA_FORMAT
    },
    typescript: {
      data: HOUR_TS_DATA
    }
  };

  public valueTypeFiles = {
    html: {
      data: HOUR_HTML_DATA_VALUETYPE
    },
    typescript: {
      data: TIMESTAMP_TS_DATA
    }
  };

  protected hour = '05:00 PM';

  public timestamp = 1542975966197;

}
