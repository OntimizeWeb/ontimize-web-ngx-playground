import { Component } from '@angular/core';

const TEXT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-text-input attr="input" label="Text (read-only)" [data]="getValue()" layout-padding></o-text-input>

      <o-text-input attr="input2" label="Text (edit mode)" [data]="getValue()" read-only="no" required="yes" tooltip="This is an awesome tooltip!"
        layout-padding></o-text-input>

      <o-text-input attr="input3" label="Text (disabled)" enabled="no" [data]="getValue()" layout-padding></o-text-input>

    </div>
  </o-form>
`;

const TEXT_TS_DATA = `
  getValue() {
    return 'John Doe';
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
