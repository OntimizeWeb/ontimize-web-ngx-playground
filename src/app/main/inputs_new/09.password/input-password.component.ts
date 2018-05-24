import { Component } from '@angular/core';

const PASSWORD_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-password-input attr="password" label="Password (read-only)" [data]="getValue()" layout-padding></o-password-input>

      <o-password-input attr="password2" label="Password (edit mode)" [data]="getValue()" read-only="no" required="yes" tooltip="This is an awesome tooltip!"
        layout-padding></o-password-input>

      <o-password-input attr="password3" label="Password (disabled)" enabled="no" [data]="getValue()" layout-padding></o-password-input>

    </div>
  </o-form>
`;

const PASSWORD_TS_DATA = `
  getValue() {
    return 'password';
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
