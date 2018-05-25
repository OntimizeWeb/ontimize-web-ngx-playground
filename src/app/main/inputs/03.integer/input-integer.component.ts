import { Component } from '@angular/core';

const INTEGER_HTML_DATA = `
  <o-integer-input attr="integer" label="Integer (read-only)" [data]="getValue()" min="0" max="10" layout-padding></o-integer-input>

  <o-integer-input attr="integer2" label="Integer (edit mode)" read-only="false" [data]="getValue()" min="0" max="100" required="true"
    tooltip="This is an awesome tooltip!" layout-padding></o-integer-input>

  <o-integer-input attr="integer3" label="Integer (disabled)" enabled="no" [data]="getValue()" min="0" max="10" layout-padding></o-integer-input>
`;

const INTEGER_TS_DATA = `
  getValue() {
    return 1;
  }
`;

@Component({
  selector: 'input-integer',
  templateUrl: 'input-integer.component.html'
})
export class InputIntegerComponent {

  files = {
    'html': {
      'data': INTEGER_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': INTEGER_TS_DATA
    }
  };

  getValue() {
    return 1;
  }

}
