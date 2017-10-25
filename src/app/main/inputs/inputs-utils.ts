export class InputUtils {

  public static getComponentId(key: string) {
    let compId = '';
    switch (key) {
      case 'currency':
        compId = 'Currency Inputs';
        break;
      case 'date':
        compId = 'Date Inputs';
        break;
      case 'email':
        compId = 'Email Inputs';
        break;
      case 'integer':
        compId = 'Integer Inputs';
        break;
      case 'listpicker':
        compId = 'Listpicker Inputs';
        break;
      case 'nif':
        compId = 'NIF Inputs';
        break;
      case 'password':
        compId = 'Password Inputs';
        break;
      case 'percent':
        compId = 'Percent Inputs';
        break;
      case 'real':
        compId = 'Real Inputs';
        break;
      case 'text':
        compId = 'Text Inputs';
        break;
      case 'textarea':
        compId = 'Textarea Inputs';
        break;
      default:
        break;
    }
    return compId;
  }

  public static getFiles(key: string) {
    let tpl = '';
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
      case 'listpicker':
        tpl = LISTPICKER_HTML_DATA;
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
      default:
        break;
    }
    return [
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
        'data': ''
      }
    ];
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

const LISTPICKER_HTML_DATA = `
<o-list-picker attr="listpicker" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="yes" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>

<o-list-picker #listpicker attr="listpicker2" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="yes" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>

<o-list-picker attr="listpicker3" label="o-list-picker (read-only)"
  [static-data]="getListPickerData()" [data]="getListPickerValue()"
  enabled="no" filter="yes" value-column="CUSTOMERTYPEID"  columns="CUSTOMERTYPEID;DESCRIPTION"
  visible-columns="DESCRIPTION" layout-padding></o-list-picker>
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
