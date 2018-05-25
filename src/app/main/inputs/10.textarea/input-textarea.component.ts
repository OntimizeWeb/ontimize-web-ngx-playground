import { Component } from '@angular/core';

const TEXTAREA_HTML_DATA = `
  <o-form editable-detail="no" show-header="no">
    <div fxLayout="column" layout-padding>

      <o-textarea-input attr="textarea" label="Textarea (read-only)" [data]="getValue()" rows="10" layout-padding></o-textarea-input>

      <o-textarea-input attr="textarea2" label="Textarea (edit mode)" [data]="getValue()" read-only="no" rows="10" tooltip="This is an awesome tooltip!"
        layout-padding></o-textarea-input>

      <o-textarea-input attr="textarea3" label="Textarea (disabled)" enabled="no" [data]="getValue()" rows="10" layout-padding></o-textarea-input>

    </div>
  </o-form>
`;

const TEXTAREA_TS_DATA = `
  getTextareaValue() {
    return '
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta arcu,
      ut ultricies magna sodales egestas. Mauris et tempus lacus. Nunc gravida sodales
      ipsum, a convallis arcu placerat rhoncus. Suspendisse in sollicitudin leo. Nam
      efficitur dolor vitae tortor commodo tincidunt. Suspendisse ornare scelerisque
      lectus, nec interdum turpis mattis ut. Morbi congue, diam quis varius tincidunt,
      ante quam vulputate arcu, sit amet faucibus tortor dui et erat. Cras eget erat
      at erat ultrices varius. Phasellus interdum enim sagittis tortor consequat lobortis.
      Fusce tortor risus, pharetra eget diam mollis, rutrum mollis sem. Nullam pellentesque
      risus id suscipit malesuada. Etiam non sem cursus libero faucibus congue.
      Sed arcu lorem, scelerisque sit amet porttitor sed, vehicula consectetur lacus.
      Vestibulum suscipit ante quis condimentum laoreet. Ut quis volutpat neque.
    ';
  }
`;

@Component({
  selector: 'input-textarea',
  templateUrl: 'input-textarea.component.html'
})
export class InputTextareaComponent {

  files = {
    'html': {
      'data': TEXTAREA_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TEXTAREA_TS_DATA
    }
  };

  getValue() {
    return `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta arcu,
      ut ultricies magna sodales egestas. Mauris et tempus lacus. Nunc gravida sodales
      ipsum, a convallis arcu placerat rhoncus. Suspendisse in sollicitudin leo. Nam
      efficitur dolor vitae tortor commodo tincidunt. Suspendisse ornare scelerisque
      lectus, nec interdum turpis mattis ut. Morbi congue, diam quis varius tincidunt,
      ante quam vulputate arcu, sit amet faucibus tortor dui et erat. Cras eget erat
      at erat ultrices varius. Phasellus interdum enim sagittis tortor consequat lobortis.
      Fusce tortor risus, pharetra eget diam mollis, rutrum mollis sem. Nullam pellentesque
      risus id suscipit malesuada. Etiam non sem cursus libero faucibus congue.
      Sed arcu lorem, scelerisque sit amet porttitor sed, vehicula consectetur lacus.
      Vestibulum suscipit ante quis condimentum laoreet. Ut quis volutpat neque.
    `;
  }

}
