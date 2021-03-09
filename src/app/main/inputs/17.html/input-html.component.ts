import { Component } from '@angular/core';

const HTML_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-html-input #input1 attr="html" [data]="getValue()"></o-html-input>

    <o-html-input attr="html2" [data]="getValue()" read-only="no" required="yes"></o-html-input>

  </o-form>
`;

const HTML_TS_DATA = `
  @Component({
    selector: 'input-html',
    templateUrl: 'input-html.component.html'
  })
  export class HTMLInputComponent {

    getValue() {
      return \`
        <!DOCTYPE html>
        <html>
          <body>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </body>
        </html>
      \`;
    }

  }
`;

@Component({
  selector: 'input-html',
  templateUrl: 'input-html.component.html'
})
export class HTMLInputComponent {

  files = {
    'html': {
      'data': HTML_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': HTML_TS_DATA
    }
  };

  getValue() {
    return `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </body>
      </html>
    `;
  }

}
