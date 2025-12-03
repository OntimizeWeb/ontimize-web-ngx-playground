import { Component } from '@angular/core';

const PASSWORD_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-password-input attr="password" label="Password" [data]="password"></o-password-input>

    <o-password-input attr="password2" label="Password" [data]="password" read-only="no" required="yes" ></o-password-input>

    <o-password-input attr="password3" label="Password" enabled="no" [data]="password"></o-password-input>

  </o-form>
`;

const SHOW_PASSWORD_BUTTON_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-password-input attr="password" label="Password" [data]="password" show-password-button="yes"></o-password-input>

    <o-password-input attr="password2" label="Password" [data]="password" read-only="no" required="yes" show-password-button="yes"></o-password-input>

    <o-password-input attr="password3" label="Password" enabled="no" [data]="password" show-password-button="yes"></o-password-input>

  </o-form>
`;

const PASSWORD_TS_DATA = `
  @Component({
    selector: 'input-password',
    templateUrl: 'input-password.component.html'
  })
  export class InputPasswordComponent {

    protected password = 'top-secret';

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


  protected topSecret = 'top-secret';

  getFiles(key?:string) {

    switch (key) {
      case 'show-button-text':
        this.files['html'] = {
          data: SHOW_PASSWORD_BUTTON_HTML_DATA
        }
        break;
      default:
        this.files['html'] = {
          data: PASSWORD_HTML_DATA
        }
        break;
    }
    return this.files;
  }

}
