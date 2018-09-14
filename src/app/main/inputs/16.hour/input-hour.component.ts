import { Component } from '@angular/core';

const HTML_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
    <o-hour-input fxFlex attr="input" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="getValue()"></o-hour-input>

  </div>
  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
    <o-hour-input attr="input2" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="getValue()" read-only="no" required="yes"
    tooltip="This is an awesome tooltip!" clear-button="yes" format="24"></o-hour-input>
  </div>
  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
    <o-hour-input attr="input3" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" enabled="no" [data]="getValue()"></o-hour-input>
  </div>

  </o-form>
`;

const HTML_TS_DATA = `
  getValue() {
    return '05:00 AM'
  }
`;

@Component({
  selector: 'input-hour',
  templateUrl: 'input-hour.component.html'
})
export class InputHourComponent {

  files = {
    'html': {
      'data': HTML_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': HTML_TS_DATA
    }
  };

  getValue() {
    return '05:00 AM';
  }

}
