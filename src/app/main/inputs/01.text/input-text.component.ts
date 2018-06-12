import { Component } from '@angular/core';

const TEXT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input fxFlex attr="input" label="Text" [data]="getValue()"></o-text-input>

    <o-text-input attr="input2" label="Text" [data]="getValue()" read-only="no" required="yes" tooltip="This is an awesome tooltip!"></o-text-input>

    <o-text-input attr="input3" label="Text" enabled="no" [data]="getValue()"></o-text-input>

  </o-form>
`;

const TEXT_TS_DATA = `
  @Component({
    selector: 'input-text',
    templateUrl: 'input-text.component.html'
  })
  export class InputTextComponent {

    getValue() {
      return 'John Doe';
    }

  }
`;

@Component({
  selector: 'input-text',
  templateUrl: 'input-text.component.html'
})
export class InputTextComponent {

  files = {
    'html': {
      'data': TEXT_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TEXT_TS_DATA
    }
  };

  getValue() {
    return 'John Doe';
  }

}
