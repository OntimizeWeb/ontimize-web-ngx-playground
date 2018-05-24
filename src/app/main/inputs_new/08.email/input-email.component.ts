import { Component } from '@angular/core';

const EMAIL_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-email-input attr="email" label="Email (read-only)" [data]="getValue()" layout-padding></o-email-input>

      <o-email-input attr="email2" label="Email (edit mode)" [data]="getValue()" read-only="no" required="yes" tooltip="This is an awesome tooltip!"
        layout-padding></o-email-input>

      <o-email-input attr="email3" label="Email (disabled)" enabled="no" [data]="getValue()" layout-padding></o-email-input>

    </div>
  </o-form>
`;

const EMAIL_TS_DATA = `
  getValue() {
    return 'john.doe@ontimize.com';
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
