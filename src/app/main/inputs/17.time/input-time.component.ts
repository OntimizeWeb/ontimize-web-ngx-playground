import { Component } from '@angular/core';

const HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">


  </o-form>
`;

const TS_DATA = `

`;

@Component({
  selector: 'input-time',
  templateUrl: 'input-time.component.html'
})
export class InputTimeComponent {

  files = {
    'html': {
      'data': HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TS_DATA
    }
  };

  getValue() {
    return 1535353788828;
  }

}
