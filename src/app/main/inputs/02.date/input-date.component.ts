import { Component, ViewEncapsulation } from '@angular/core';
import moment, { Moment } from 'moment';

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

const DATE_HTML_MIN_MAX = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-date-input value-type="timestamp" attr="minMaxInput" label="Date" [data]="getValue('timestamp')"
      read-only="no" required="yes" [min]="getMinValue('timestamp')" [max]="getMaxValue('timestamp')"></o-date-input>

    <o-date-input value-type="string" attr="minMaxInput2" label="Date" [data]="getValue('string')"
      read-only="no" required="yes" [min]="getMinValue('string')" [max]="getMaxValue('string')"></o-date-input>

    <o-date-input value-type="date" attr="minMaxInput3" label="Date" [data]="getValue('date')" read-only="no"
      required="yes" [min]="getMinValue('date')" [max]="getMaxValue('date')"></o-date-input>

    <o-date-input value-type="iso-8601" attr="minMaxInput4" label="Date" [data]="getValue('ISO-8601')"
      read-only="no" required="yes" [min]="getMinValue('ISO-8601')" [max]="getMaxValue('ISO-8601')"></o-date-input>

  </o-form>
`;

const DATE_TS_DATA = `
  @Component({
    selector: 'input-date',
    templateUrl: 'input-date.component.html'
  })
  export class InputDateComponent {

    private strDateValue = '05/30/2018'
    private dateValue: Moment;

    constructor() {
      this.dateValue = moment(this.strDateValue, 'MM/DD/YYYY')
      this.minDateValue = moment(this.strMinDateValue, 'MM/DD/YYYY')
      this.maxDateValue = moment(this.strMaxDateValue, 'MM/DD/YYYY')
    }

    public getValue(type: string = 'timestamp'): any {
      let result: any;
      switch (type) {
        case 'string':
          result = this.strDateValue;
          break;
        case 'date':
          result = this.dateValue.toDate();
          break;
        case 'ISO-8601':
          result = this.dateValue.toISOString();
          break;
        case 'timestamp':
          result = this.dateValue.valueOf();
        default:
          break;
      }
      return result;
    }

  }
`;

const DATE_TS_DATA_MIN_MAX = `
  @Component({
    selector: 'input-date',
    templateUrl: 'input-date.component.html'
  })
  export class InputDateComponent {

    private strDateValue = '05/30/2018'
    private strMinDateValue = '05/28/2018'
    private strMaxDateValue = '05/31/2018'
    private dateValue: Moment;
    private minDateValue: Moment;
    private maxDateValue: Moment;

    constructor() {
      this.dateValue = moment(this.strDateValue, 'MM/DD/YYYY')
      this.minDateValue = moment(this.strMinDateValue, 'MM/DD/YYYY')
      this.maxDateValue = moment(this.strMaxDateValue, 'MM/DD/YYYY')
    }

    public getValue(type: string = 'timestamp'): any {
      let result: any;
      switch (type) {
        case 'string':
          result = this.strDateValue;
          break;
        case 'date':
          result = this.dateValue.toDate();
          break;
        case 'ISO-8601':
          result = this.dateValue.toISOString();
          break;
        case 'timestamp':
          result = this.dateValue.valueOf();
        default:
          break;
      }
      return result;
    }

    public getMinValue(type: string = 'timestamp'): any {
      let result: any;
      switch (type) {
        case 'string':
          result = this.strMinDateValue;
          break;
        case 'date':
          result = this.minDateValue.toDate();
          break;
        case 'ISO-8601':
          result = this.minDateValue.toISOString();
          break;
        case 'timestamp':
          result = this.minDateValue.valueOf();
        default:
          break;
      }
      return result;
    }
  
    public getMaxValue(type: string = 'timestamp'): any {
      let result: any;
      switch (type) {
        case 'string':
          result = this.strMaxDateValue;
          break;
        case 'date':
          result = this.maxDateValue.toDate();
          break;
        case 'ISO-8601':
          result = this.maxDateValue.toISOString();
          break;
        case 'timestamp':
          result = this.maxDateValue.valueOf();
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

  public valueTypeFilesMinMax = {
    html: {
      data: DATE_HTML_MIN_MAX
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: DATE_TS_DATA_MIN_MAX
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

  private strDateValue = '05/30/2018'
  private strMinDateValue = '05/28/2018'
  private strMaxDateValue = '05/31/2018'
  private dateValue: Moment;
  private minDateValue: Moment;
  private maxDateValue: Moment;

  constructor() {
    this.dateValue = moment(this.strDateValue, 'MM/DD/YYYY')
    this.minDateValue = moment(this.strMinDateValue, 'MM/DD/YYYY')
    this.maxDateValue = moment(this.strMaxDateValue, 'MM/DD/YYYY')
  }

  public getValue(type: string = 'timestamp'): any {
    let result: any;
    switch (type) {
      case 'string':
        result = this.strDateValue;
        break;
      case 'date':
        result = this.dateValue.toDate();
        break;
      case 'ISO-8601':
        result = this.dateValue.toISOString();
        break;
      case 'timestamp':
        result = this.dateValue.valueOf();
      default:
        break;
    }
    return result;
  }

  public getMinValue(type: string = 'timestamp'): any {
    let result: any;
    switch (type) {
      case 'string':
        result = this.strMinDateValue;
        break;
      case 'date':
        result = this.minDateValue.toDate();
        break;
      case 'ISO-8601':
        result = this.minDateValue.toISOString();
        break;
      case 'timestamp':
        result = this.minDateValue.valueOf();
      default:
        break;
    }
    return result;
  }

  public getMaxValue(type: string = 'timestamp'): any {
    let result: any;
    switch (type) {
      case 'string':
        result = this.strMaxDateValue;
        break;
      case 'date':
        result = this.maxDateValue.toDate();
        break;
      case 'ISO-8601':
        result = this.maxDateValue.toISOString();
        break;
      case 'timestamp':
        result = this.maxDateValue.valueOf();
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
