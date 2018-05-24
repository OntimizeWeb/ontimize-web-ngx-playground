import { Component } from '@angular/core';

const PERCENT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="row wrap">

      <o-percent-input attr="percent" label="Percent (read-only)" [data]="getValue()" layout-padding></o-percent-input>

      <o-percent-input attr="percent2" label="Percent (edit mode)" [data]="getValue()" read-only="false" required="yes" tooltip="This is an awesome tooltip!"
        layout-padding></o-percent-input>

      <o-percent-input attr="percent3" label="Percent (disabled)" enabled="no" [data]="getValue()" layout-padding></o-percent-input>

    </div>
  </o-form>
`;

const PERCENT_TS_DATA = `
  getValue() {
    return 52.55;
  }
`;

@Component({
  selector: 'input-percent',
  templateUrl: 'input-percent.component.html'
})
export class InputPercentComponent {

  files = {
    'html': {
      'data': PERCENT_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': PERCENT_TS_DATA
    }
  };

  getValue() {
    return 52.55;
  }

}
