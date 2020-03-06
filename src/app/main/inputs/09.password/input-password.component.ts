import { Component } from '@angular/core';

const PASSWORD_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-password-input attr="password" label="Password" [data]="getValue()"></o-password-input>

    <o-password-input attr="password2" label="Password" [data]="getValue()" read-only="no" required="yes" ></o-password-input>

    <o-password-input attr="password3" label="Password" enabled="no" [data]="getValue()"></o-password-input>

  </o-form>
`;

const PASSWORD_TS_DATA = `
  @Component({
    selector: 'input-password',
    templateUrl: 'input-password.component.html'
  })
  export class InputPasswordComponent {

    getValue() {
      return 'password';
    }

  }
`;

@Component({
  selector: 'input-password',
  templateUrl: 'input-password.component.html'
})
export class InputPasswordComponent {

  files = {
    'html': {
      'data': PASSWORD_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': PASSWORD_TS_DATA
    }
  };

  getValue() {
    return 'password';
  }

}
