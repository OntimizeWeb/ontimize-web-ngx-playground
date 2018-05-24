import { Component } from '@angular/core';

const FILE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="column">

      <o-file-input attr="file" label="File (edit mode)" read-only="no" required="yes" accept-file-type=".png;.jpg" max-file-size="10000"
        multiple="yes" layout-padding tooltip="This is an awesome tooltip!"></o-file-input>

      <o-file-input attr="file2" label="File (disabled)" enabled="no" layout-padding></o-file-input>

    </div>
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
