import { Component } from '@angular/core';

const TEXT_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input fxFlex attr="input" label="Text" [data]="getValue()"></o-text-input>

    <o-text-input attr="input2" label="Text" [data]="getValue()" read-only="no" required="yes" ></o-text-input>

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

const STRING_CASE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input attr="input" label="Write some text" read-only="no" string-case="default"></o-text-input>

    <o-text-input attr="input1" label="Write some text" read-only="no" string-case="uppercase"></o-text-input>

    <o-text-input attr="input2" label="Write some text" read-only="no" string-case="lowercase"></o-text-input>

  </o-form>
`;

const PATTERN_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input attr="input" label="Enter some numbers" read-only="no" regulate-pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"></o-text-input>

    <o-text-input attr="input1" label="Write some text" read-only="no" regulate-pattern="^[a-zA-Z ]*$"></o-text-input>

  </o-form>
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

  files1 = {
    'html': {
      'data': STRING_CASE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  files2 = {
    'html': {
      'data': PATTERN_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  getValue() {
    return 'John Doe';
  }

}
