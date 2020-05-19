import { Component } from '@angular/core';

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

@Component({
  selector: 'input-date',
  templateUrl: 'input-date.component.html'
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
