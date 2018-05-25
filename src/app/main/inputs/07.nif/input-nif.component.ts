import { Component } from '@angular/core';

const NIF_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-nif-input attr="nif" label="NIF (read-only)" [data]="getValue()" layout-padding></o-nif-input>

      <o-nif-input #nif attr="nif2" label="NIF (edit mode)" [data]="getValue()" read-only="no" required="yes" tooltip="This is an awesome tooltip!"
        layout-padding></o-nif-input>

      <o-nif-input attr="nif3" label="NIF (disabled)" enabled="no" [data]="getValue()" layout-padding></o-nif-input>
    </div>
  </o-form>
`;

const NIF_TS_DATA = `
  getValue() {
    return '53780330M';
  }
`;

@Component({
  selector: 'input-nif',
  templateUrl: 'input-nif.component.html'
})
export class InputNIFComponent {

  files = {
    'html': {
      'data': NIF_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': NIF_TS_DATA
    }
  };

  getValue() {
    return '53780330M';
  }

}
