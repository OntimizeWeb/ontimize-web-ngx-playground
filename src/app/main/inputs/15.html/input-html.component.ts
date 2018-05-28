import { Component } from '@angular/core';

const HTML_HTML_DATA = `
<o-html-input attr="html" label="HTML" [data]="getValue()"></o-html-input>
`;

const HTML_TS_DATA = `
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
