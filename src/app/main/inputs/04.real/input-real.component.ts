import { Component } from '@angular/core';

const REAL_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-real-input attr="real" label="Real" [data]="getValue()" decimal-digits="3" min-decimal-digits="2" max-decimal-digits="4"
      min="30" max="40.0"></o-real-input>

    <o-real-input attr="real2" label="Real" [data]="getValue()" read-only="no" required="yes" decimal-digits="3" min-decimal-digits="2"
      max-decimal-digits="4" min="30" max="40.0" ></o-real-input>

    <o-real-input attr="real3" label="Real" enabled="no" [data]="getValue()" decimal-digits="3" min-decimal-digits="2" max-decimal-digits="4"
      min="30" max="40.0"></o-real-input>

  </o-form>
`;

const REAL_TS_DATA = `
  @Component({
    selector: 'input-real',
    templateUrl: 'input-real.component.html'
  })
  export class InputRealComponent {

    getValue() {
      return 33.45;;
    }

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
