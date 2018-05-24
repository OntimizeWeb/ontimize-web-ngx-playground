import { Component } from '@angular/core';

const CHECKBOX_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-checkbox attr="check" label="Checkbox (read-only)" [data]="getValue()" layout-padding></o-checkbox>

      <o-checkbox attr="check1" label="Checkbox (edit mode)" [data]="getValue()" read-only="no" tooltip="This is an awesome tooltip!"
        layout-padding></o-checkbox>

      <o-checkbox attr="check2" label="Checkbox (disabled)" enabled="no" layout-padding></o-checkbox>

    </div>
  </o-form>
`;

const CHECKBOX_TS_DATA = `
  getValue() {
    return true;
  }
}`;

@Component({
  selector: 'input-checkbox',
  templateUrl: 'input-checkbox.component.html'
})
export class InputCheckboxComponent {

  files = {
    'html': {
      'data': CHECKBOX_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': CHECKBOX_TS_DATA
    }
  };

  getValue() {
    return true;
  }

}
