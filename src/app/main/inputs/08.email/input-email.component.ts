import { Component } from '@angular/core';

const EMAIL_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-email-input attr="email" label="Email" [data]="getValue()"></o-email-input>

    <o-email-input attr="email2" label="Email" [data]="getValue()" read-only="no" required="yes" ></o-email-input>

    <o-email-input attr="email3" label="Email" enabled="no" [data]="getValue()"></o-email-input>

  </o-form>
`;

const EMAIL_TS_DATA = `
  @Component({
    selector: 'input-email',
    templateUrl: 'input-email.component.html'
  })
  export class InputEmailComponent {

    getValue() {
      return 'john.doe@ontimize.com';
    }

  }
`;

@Component({
  selector: 'input-email',
  templateUrl: 'input-email.component.html'
})
export class InputEmailComponent {

  files = {
    'html': {
      'data': EMAIL_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': EMAIL_TS_DATA
    }
  };

  getValue() {
    return 'john.doe@ontimize.com';
  }

}
