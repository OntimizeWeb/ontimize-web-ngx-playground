import { Component } from '@angular/core';

const INTEGER_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-integer-input attr="integer" label="Integer" [data]="getValue()" min="0" max="10"></o-integer-input>

    <o-integer-input attr="integer2" label="Integer" read-only="false" [data]="getValue()" min="0" max="100" required="true"
      tooltip="This is an awesome tooltip!"></o-integer-input>

    <o-integer-input attr="integer3" label="Integer" enabled="no" [data]="getValue()" min="0" max="10"></o-integer-input>

  </o-form>
`;

const INTEGER_TS_DATA = `
  @Component({
    selector: 'input-integer',
    templateUrl: 'input-integer.component.html'
  })
  export class InputIntegerComponent {

    getValue() {
      return 1;
    }

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
