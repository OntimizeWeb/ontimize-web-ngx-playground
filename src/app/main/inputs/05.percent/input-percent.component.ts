import { Component } from '@angular/core';

const PERCENT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-percent-input attr="percent" label="Percentage" [data]="getValue()"></o-percent-input>

    <o-percent-input attr="percent2" label="Percentage" [data]="getValue()" read-only="false" required="yes" tooltip="This is an awesome tooltip!"></o-percent-input>

    <o-percent-input attr="percent3" label="Percentage" enabled="no" [data]="getValue()"></o-percent-input>

  </o-form>
`;

const PERCENT_TS_DATA = `
  @Component({
    selector: 'input-percent',
    templateUrl: 'input-percent.component.html'
  })
  export class InputPercentComponent {

    getValue() {
      return 52.55;
    }

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
