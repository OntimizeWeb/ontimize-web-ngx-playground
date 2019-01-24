import { Component } from '@angular/core';

const TEXTAREA_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-textarea-input attr="textarea" label="Textarea" [data]="getValue()" rows="10"></o-textarea-input>

    <o-textarea-input attr="textarea2" label="Textarea" [data]="getValue()" read-only="no" rows="10" ></o-textarea-input>

    <o-textarea-input attr="textarea3" label="Textarea" enabled="no" [data]="getValue()" rows="10"></o-textarea-input>

  </o-form>
`;

const TEXTAREA_TS_DATA = `
  @Component({
    selector: 'input-textarea',
    templateUrl: 'input-textarea.component.html'
  })
  export class InputTextareaComponent {

    getValue() {
      return \`
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
      \`;
    }

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
