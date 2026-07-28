import { Component } from '@angular/core';

const INTEGER_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-integer-input attr="integer" label="Integer" [data]="number" min="0" max="10"></o-integer-input>

    <o-integer-input attr="integer2" label="Integer" read-only="false" [data]="number" min="0" max="100" required="true"
      ></o-integer-input>

    <o-integer-input attr="integer3" label="Integer" enabled="no" [data]="number" min="0" max="10"></o-integer-input>

  </o-form>
`;

const INTEGER_TS_DATA = `
  @Component({
    selector: 'input-integer',
    templateUrl: 'input-integer.component.html'
  })
  export class InputIntegerComponent {

    protected number = 123;

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

  protected number = 123;

}
