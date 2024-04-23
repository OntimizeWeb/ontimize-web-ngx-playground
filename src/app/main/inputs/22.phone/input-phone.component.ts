import { Component } from '@angular/core';

const TEXT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-phone-input attr="input" label="phone" [data]="getValue()"></o-phone-input>

    <o-phone-input attr="input2" label="phone" [data]="getValue()" read-only="no"required="yes"></o-phone-input>

    <o-phone-input attr="input3" label="phone" enabled="no" [data]="getValue()"></o-phone-input>

  </o-form>
`;

const TEXT_TS_DATA = `
 @Component({
  selector: 'input-phone',
  templateUrl: 'input-phone.component.html'
})
  export class InputPhoneComponent {

    getValue() {
      return '+34 986350677';
    }

  }
`;

@Component({
  selector: 'input-phone',
  templateUrl: 'input-phone.component.html'
})
export class InputPhoneComponent {

  files = {
    'html': {
      'data': TEXT_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TEXT_TS_DATA
    }
  };

  getValue() {
    return '+34 986350677';
  }

}
