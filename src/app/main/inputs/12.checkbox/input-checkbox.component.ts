import { Component } from '@angular/core';

const CHECKBOX_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-checkbox attr="check" label="Checkbox" [data]="getValue()"></o-checkbox>

    <o-checkbox attr="check1" label="Checkbox" [data]="getValue()" read-only="no" tooltip="This is an awesome tooltip!"></o-checkbox>

    <o-checkbox attr="check2" label="Checkbox" enabled="no"></o-checkbox>

  </o-form>
`;

const CHECKBOX_TS_DATA = `
  @Component({
    selector: 'input-checkbox',
    templateUrl: 'input-checkbox.component.html'
  })
  export class InputCheckboxComponent {

    getValue() {
      return true;
    }

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
