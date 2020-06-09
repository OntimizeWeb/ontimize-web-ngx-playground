import { Component, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';
const DATE_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-date-input attr="date" label="Date" [data]="getValue()"></o-date-input>

    <o-date-input attr="date2" label="Date" [data]="getValue()" read-only="no" format="LL" required="yes"
      min="01/01/1980" max="01/01/2020" text-input-enabled="no"></o-date-input>

    <o-date-input attr="date3" label="Date" enabled="no" [data]="getValue()"></o-date-input>

  </o-form>
`;

const DATE_HTML_DATA_TYPES = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-date-input value-type="timestamp" attr="valueTypeInput" label="Date" [data]="getValue('timestamp')"
      read-only="no" required="yes"></o-date-input>

    <o-date-input value-type="string" attr="valueTypeInput2" label="Date" [data]="getValue('string')"
      read-only="no" required="yes"></o-date-input>

    <o-date-input value-type="date" attr="valueTypeInput3" label="Date" [data]="getValue('date')" read-only="no"
      required="yes"></o-date-input>

    <o-date-input value-type="iso-8601" attr="valueTypeInput4" label="Date" [data]="getValue('ISO-8601')"
      read-only="no" required="yes"></o-date-input>

  </o-form>
`;

const DATE_TS_DATA = `
  @Component({
    selector: 'input-date',
    templateUrl: 'input-date.component.html'
  })
  export class InputDateComponent {

    protected dateValue: Date = new Date('10/05/2018');

    public getValue(type: string = 'timestamp'): any {
      let result: any;
      switch (type) {
        case 'string':
          result = '10/05/2018';
          break;
        case 'date':
          result = this.dateValue;
          break;
        case 'ISO-8601':
          result = this.dateValue.toISOString();
          break;
        case 'timestamp':
          result = this.dateValue.getTime();
        default:
          break;
      }
      return result;
    }

  }
`;

const DATE_HTML_CUSTOM_CLASS = `
 <o-form editable-detail="no" show-header="no" layout-direction="column">
    <o-date-input attr="customDateClass" label="Date" read-only="no" required="yes" [date-class]="customDateClass">
    </o-date-input>
  </o-form>
`;

const DATE_TS_CUSTOM_CLASS = `
import { Component, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';

 @Component({
    selector: 'input-date',
    templateUrl: 'input-date.component.html'
  })
  export class InputDateComponent {

    customDateClass = (m: Moment) => {
      const date = m.date();
      // Highlight the 1st of each month.
      return (date === 1) ? 'example-custom-date-class' : undefined;
    }

  }
`;

const DATE_SCSS_CUSTOM_CLASS = `
  .example-custom-date-class {
    background: orange;
    border-radius: 100%;
  }
`;
@Component({
  selector: 'input-date',
  templateUrl: 'input-date.component.html',
  styleUrls: ['input-date.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputDateComponent {

  public files = {
    html: {
      data: DATE_HTML_DATA
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: DATE_TS_DATA
    }
  };

  public valueTypeFiles = {
    html: {
      data: DATE_HTML_DATA_TYPES
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: DATE_TS_DATA
    }
  };
  public customDateClassFiles = {
    html: {
      data: DATE_HTML_CUSTOM_CLASS
    },
    scss: {
      data: DATE_SCSS_CUSTOM_CLASS
    },
    typescript: {
      data: DATE_TS_CUSTOM_CLASS
    }

  }

  protected dateValue: Date = new Date('10/05/2018');

  public getValue(type: string = 'timestamp'): any {
    let result: any;
    switch (type) {
      case 'string':
        result = '10/05/2018';
        break;
      case 'date':
        result = this.dateValue;
        break;
      case 'ISO-8601':
        result = this.dateValue.toISOString();
        break;
      case 'timestamp':
        result = this.dateValue.getTime();
      default:
        break;
    }
    return result;
  }

  customDateClass = (m: Moment) => {
    const date = m.date();
    // Highlight the 1st of each month.
    return (date === 1) ? 'example-custom-date-class' : undefined;
  }
}
