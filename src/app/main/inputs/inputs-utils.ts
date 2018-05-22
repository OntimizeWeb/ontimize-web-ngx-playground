export class InputUtils {

  public static getFiles(key: string) {
    let tpl = '';
    let ts = '';
    switch (key) {
      case 'currency':
        tpl = CURRENCY_HTML_DATA;
        break;
      case 'date':
        tpl = DATE_HTML_DATA;
        break;
      case 'email':
        tpl = EMAIL_HTML_DATA;
        break;
      case 'integer':
        tpl = INTEGER_HTML_DATA;
        break;
      case 'nif':
        tpl = NIF_HTML_DATA;
        break;
      case 'password':
        tpl = PASSWORD_HTML_DATA;
        break;
      case 'percent':
        tpl = PERCENT_HTML_DATA;
        break;
      case 'real':
        tpl = REAL_HTML_DATA;
        break;
      case 'text':
        tpl = TEXT_HTML_DATA;
        break;
      case 'textarea':
        tpl = TEXTAREA_HTML_DATA;
        break;
      case 'file':
        tpl = FILE_HTML_DATA;
        break;
      case 'checkbox':
        tpl = CHECKBOX_HTML_DATA;
        break;
      default:
        break;
    }

    switch (key) {
      case 'currency':
        ts = CURRENCY_TS_DATA;
        break;
      case 'date':
        ts = DATE_TS_DATA;
        break;
      case 'email':
        ts = EMAIL_TS_DATA;
        break;
      case 'integer':
        ts = INTEGER_TS_DATA;
        break;
      case 'nif':
        ts = NIF_TS_DATA;
        break;
      case 'password':
        ts = PASSWORD_TS_DATA;
        break;
      case 'percent':
        ts = PERCENT_TS_DATA
        break;
      case 'real':
        ts = REAL_TS_DATA;
        break;
      case 'text':
        ts = TEXT_TS_DATA;
        break;
      case 'textarea':
        ts = TEXTAREA_TS_DATA;
        break;
      case 'file':
        ts = '';
        break;
      case 'checkbox':
        ts = CHECKBOX_TS_DATA;
        break;
      default:
        break;
    }
    return {
      files: [
        {
          'type': 'html',
          'data': tpl
        },
        {
          'type': 'scss',
          'data': ''
        },
        {
          'type': 'typescript',
          'data': ts
        }
      ]
    };
  }



}

const CURRENCY_HTML_DATA = `
<o-currency-input attr="currency" label="o-currency (read-only)" layout-padding
  [data]="getCurrencyValue()" decimal-digits="2"
  min-decimal-digits="2" max-decimal-digits="2"></o-currency-input>

<o-currency-input #currency attr="currency2" label="o-currency (edit mode)"  layout-padding
  [data]="getCurrencyValue()" decimal-digits="2"
  min-decimal-digits="2" max-decimal-digits="2"></o-currency-input>

<o-currency-input attr="currency3" label="o-currency disabled" enabled="no"  layout-padding
  [data]="getCurrencyValue()" decimal-digits="2"
  min-decimal-digits="2" max-decimal-digits="2"></o-currency-input>
`;


const EMAIL_HTML_DATA = `
<o-email-input attr="email" label="o-email (read-only)" layout-padding
  [data]="getEmailValue()"></o-email-input>

<o-email-input #email attr="email2" label="o-email (edit mode)"  layout-padding
  [data]="getEmailValue()"></o-email-input>

<o-email-input attr="email3" label="o-email disabled" enabled="no"  layout-padding
  [data]="getEmailValue()"></o-email-input>
`;

const INTEGER_HTML_DATA = `
<o-integer-input attr="integer" label="o-integer (read-only)" layout-padding
  [data]="getIntegerValue()" min="0" max="10"></o-integer-input>

<o-integer-input #integer attr="integer2" label="o-integer (edit mode)"  layout-padding
  [data]="getIntegerValue()" min="0" max="10"></o-integer-input>

<o-integer-input attr="integer3" label="o-integer disabled" enabled="no"  layout-padding
  [data]="getIntegerValue()" min="0" max="10"></o-integer-input>
`;

const NIF_HTML_DATA = `
<o-nif-input attr="nif" label="o-nif (read-only)" layout-padding
  [data]="getNIFValue()"></o-nif-input>

<o-nif-input #nif attr="nif2" label="o-nif (edit mode)"  layout-padding
  [data]="getNIFValue()"></o-nif-input>

<o-nif-input attr="nif3" label="o-nif disabled" enabled="no"  layout-padding
  [data]="getNIFValue()"></o-nif-input>
`;

const PASSWORD_HTML_DATA = `
<o-password-input attr="password" label="o-password (read-only)" layout-padding
  [data]="getPasswordValue()"></o-password-input>

<o-password-input #password attr="password2" label="o-password (edit mode)"  layout-padding
  [data]="getPasswordValue()"></o-password-input>

<o-password-input attr="password3" label="o-password disabled" enabled="no"  layout-padding
  [data]="getPasswordValue()"></o-password-input>
`;

const PERCENT_HTML_DATA = `
<o-percent-input attr="percent" label="o-percent (read-only)" layout-padding
  [data]="getPercentValue()"></o-percent-input>

<o-percent-input #percent attr="percent2" label="o-percent (edit mode)"  layout-padding
  [data]="getPercentValue()"></o-percent-input>

<o-percent-input attr="percent3" label="o-percent disabled" enabled="no"  layout-padding
  [data]="getPercentValue()"></o-percent-input>
`;

const REAL_HTML_DATA = `
<o-real-input attr="real" label="o-real (read-only)" layout-padding
  [data]="getRealValue()" decimal-digits="3" min-decimal-digits="2" max-decimal-digits="4"
    min="30" max="40.0"></o-real-input>

<o-real-input #real attr="real2" label="o-real (edit mode)"  layout-padding
  [data]="getRealValue()" decimal-digits="3"  min-decimal-digits="2" max-decimal-digits="4"
    min="30" max="40.0"></o-real-input>

<o-real-input attr="real3" label="o-real disabled" enabled="no"  layout-padding
  [data]="getRealValue()" decimal-digits="3"  min-decimal-digits="2" max-decimal-digits="4"
    min="30" max="40.0"></o-real-input>
`;

const TEXT_HTML_DATA = `
<o-text-input attr="input" label="o-input (read-only)" layout-padding
  [data]="getInputValue()"></o-text-input>

<o-text-input #input attr="input2" label="o-input (edit mode)"  layout-padding
  [data]="getInputValue()"></o-text-input>

<o-text-input attr="input3" label="o-input disabled" enabled="no"  layout-padding
  [data]="getInputValue()"></o-text-input>`;


const TEXT_TS_DATA = `
  getInputValue() {
    return 'John Doe';
  }
`;

const DATE_TS_DATA = `
  getDateValue() {
    return this.dateValue;
  }
`;

const INTEGER_TS_DATA = `
  getIntegerValue() {
    return 1;
  }
`;

const REAL_TS_DATA = `
  getRealValue() {
    return 33.45;
  }
`;

const PERCENT_TS_DATA = `
  getPercentValue() {
    return 52.55;
  }
`;

const CURRENCY_TS_DATA = `
  getCurrencyValue() {
    return 2574.99;
  }
`;

const NIF_TS_DATA = `
  getNIFValue() {
    return '00000000T';
  }`;

const EMAIL_TS_DATA = `
  getEmailValue() {
    return 'john.doe@ontimize.com';
  }
`;
const PASSWORD_TS_DATA = `
  getPasswordValue() {
    return 'password';
  }
`;
const DATE_HTML_DATA = `
<o-date-input attr="date" label="o-date (read-only)" layout-padding
  [data]="getDate()"></o-date-input>

<o-date-input #date attr="date2" label="o-date (edit mode)"  layout-padding
  [data]="getDate()" min="01/01/1980" max="01/01/2020"></o-date-input>

<o-date-input attr="date3" label="o-date disabled" enabled="no"  layout-padding
  [data]="getDate()"></o-date-input>`;

const TEXTAREA_HTML_DATA = `
<o-textarea-input attr="textarea" label="o-textarea (read-only)" layout-padding
  [data]="getTextareaValue()"></o-textarea-input>

<o-textarea-input #textarea attr="textarea2" label="o-textarea (edit mode)"  layout-padding
  [data]="getTextareaValue()"></o-textarea-input>

<o-textarea-input attr="textarea3" label="o-textarea disabled" enabled="no"  layout-padding
  [data]="getTextareaValue()"></o-textarea-input>
`;

const FILE_HTML_DATA = `
<o-file-input #file attr="file2" label="o-file-input (edit mode)" layout-padding tooltip="This is an awesome tooltip!!!!"
  required="yes" accept-file-type=".png;.jpg" max-file-size="10000" multiple="yes"></o-file-input>

<o-file-input attr="file3" label="o-file-input disabled" enabled="no" layout-padding></o-file-input>`;


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

const CHECKBOX_HTML_DATA = `
<o-checkbox attr="check" label="O-checkbox (read-only)"></o-checkbox>

<o-checkbox #checkbox attr="check1" label="O-checkbox (edit mode)"></o-checkbox>

<o-checkbox attr="check2" label="O-checkbox disabled" enabled="no"></o-checkbox>
`;

const CHECKBOX_TS_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OCheckboxComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'checkbox-home',
  moduleId: module.id,
  styleUrls: ['checkbox-home.component.scss'],
  templateUrl: 'checkbox-home.component.html'
})
export class CheckboxHomeComponent {

  @ViewChild('checkbox') checkBox: OCheckboxComponent;

  constructor() {
  }

  ngAfterViewInit() {
  }
}`;
