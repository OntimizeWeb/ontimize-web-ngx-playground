import { Component } from '@angular/core';

const FILE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-file-input attr="file" label="{{ 'INPUT.BUTTON.FILE' | oTranslate }} (edit mode)" read-only="no" required="yes" accept-file-type=".png;.jpg"
      max-file-size="10000" multiple="yes" layout-padding tooltip="This is an awesome tooltip!"></o-file-input>

    <o-file-input attr="file2" label="{{ 'INPUT.BUTTON.FILE' | oTranslate }} (disabled)" enabled="no" layout-padding></o-file-input>

  </o-form>
`;

@Component({
  selector: 'input-file',
  templateUrl: 'input-file.component.html'
})
export class InputFileComponent {

  files = {
    'html': {
      'data': FILE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

}
