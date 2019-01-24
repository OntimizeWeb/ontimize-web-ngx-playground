import { Component } from '@angular/core';

const SLIDETOGGLE_HTML_DATA = `
  <o-form editable-detail="false" show-header="no">

    <o-slide-toggle attr="slidetoggle" label="Slide toggle" [data]="getValue()"></o-slide-toggle>

    <o-slide-toggle attr="slidetoggle-editable" label="Slide toggle" [data]="getValue()" read-only="no"
        ></o-slide-toggle>

    <o-slide-toggle attr="slidetoggle-disabled" label="Slide toggle" enabled="no"></o-slide-toggle>

  </o-form>
`;

const SLIDETOGGLE_TS_DATA = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-slidetoggle',
  templateUrl: './input-slidetoggle.component.html'
})
export class InputSlidetoggleComponent {

  getValue() {
    return true;
  }

}
`;

@Component({
  selector: 'input-slidetoggle',
  templateUrl: './input-slidetoggle.component.html'
})
export class InputSlidetoggleComponent {

  files = {
    'html': {
      'data': SLIDETOGGLE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': SLIDETOGGLE_TS_DATA
    }
  };

  getValue() {
    return true;
  }

}
