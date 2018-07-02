import { Component } from '@angular/core';

const NIF_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-nif-input attr="nif" label="NIF" [data]="getValue()"></o-nif-input>

    <o-nif-input #nif attr="nif2" label="NIF" [data]="getValue()" read-only="no" required="yes"
      tooltip="This is an awesome tooltip!"></o-nif-input>

    <o-nif-input attr="nif3" label="NIF" enabled="no" [data]="getValue()"></o-nif-input>

  </o-form>
`;

const NIF_TS_DATA = `
  @Component({
    selector: 'input-nif',
    templateUrl: 'input-nif.component.html'
  })
  export class InputNIFComponent {

    getValue() {
      return '53780330M';
    }

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
