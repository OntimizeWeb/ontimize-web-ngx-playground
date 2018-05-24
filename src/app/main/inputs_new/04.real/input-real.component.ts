import { Component } from '@angular/core';

const REAL_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-real-input attr="real" label="Real (read-only)" [data]="getValue()" decimal-digits="3" min-decimal-digits="2" max-decimal-digits="4"
        min="30" max="40.0" layout-padding></o-real-input>

      <o-real-input attr="real2" label="Real (edit mode)" [data]="getValue()" read-only="no" required="yes" decimal-digits="3"
        min-decimal-digits="2" max-decimal-digits="4" min="30" max="40.0" tooltip="This is an awesome tooltip!" layout-padding></o-real-input>

      <o-real-input attr="real3" label="Real (disabled)" enabled="no" [data]="getValue()" decimal-digits="3" min-decimal-digits="2"
        max-decimal-digits="4" min="30" max="40.0" layout-padding></o-real-input>

    </div>
  </o-form>
`;

const REAL_TS_DATA = `
  getValue() {
    return 33.45;
  }
`;

@Component({
  selector: 'input-real',
  templateUrl: 'input-real.component.html'
})
export class InputRealComponent {

  files = {
    'html': {
      'data': REAL_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': REAL_TS_DATA
    }
  };

  getValue() {
    return 33.45;;
  }

}
