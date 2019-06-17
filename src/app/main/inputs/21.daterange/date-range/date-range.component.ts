import { Component } from '@angular/core';
import * as moment from 'moment';


const DATE_HTML_DATA = `
<o-form editable-detail="no" show-header="no" layout-direction="column">
  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
    <o-daterange-input attr="daterange1" label="{{ 'INPUT.BUTTON.DATERANGE' | oTranslate }}" required="yes"
      [data]="getValue()">
    </o-daterange-input>
  </div>
  <div fxLayout="column" layout-padding>
    <o-daterange-input attr="daterange2" label="{{ 'INPUT.BUTTON.DATERANGE' | oTranslate }}" read-only="no"
      required="yes" [data]="getValue()" (change)="change($event)"  clear-button="yes"  format="LL" separator=" to ">
    </o-daterange-input>
  </div>
  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
    <o-daterange-input attr="daterange3" label="{{ 'INPUT.BUTTON.DATERANGE' | oTranslate }}" enabled="no"
      [data]="getValue()">
    </o-daterange-input>
  </div>
</o-form>
`;

const DATE_HTML_MINMAX = `
<o-form editable-detail="no" show-header="no" layout-direction="column">
  <div fxLayout="column" layout-padding>
    <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
    <o-daterange-input attr="daterange2" label="{{ 'INPUT.BUTTON.DATERANGE' | oTranslate }}" read-only="no"
      required="yes" [data]="getValue()" min="15/05/2019" max="20/06/2019" format="DD/MM/YYYY"
      show-week-numbers="true">
    </o-daterange-input>
  </div>
</o-form>
`;

const DATE_HTML_RANGES = `
<o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-daterange-input attr="daterange2" label="{{ 'INPUT.BUTTON.DATERANGE' | oTranslate }}" read-only="no"
        required="yes" [data]="getValue()" show-ranges="true" format="DD/MM/YYYY"
        separator=" to " touch-ui="yes">
      </o-daterange-input>
    </div>
  </o-form>
`;

const DATE_TS_DATA = `
export class InputDateRangeComponent {

  public selected = {};
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

  constructor() {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };
  }

  getValue() {
    return this.selected;
  }
}
`;

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})

export class InputDateRangeComponent {

  public selected = {};
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

  public mixMaxDateRangeFiles = {
    html: {
      data: DATE_HTML_MINMAX
    },
    typescript: {
      data: DATE_TS_DATA
    }
  };

  public showRangeDateRangeFiles = {
    html: {
      data: DATE_HTML_RANGES
    },
    typescript: {
      data: DATE_TS_DATA
    }
  };

  constructor() {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };
  }

  getValue() {
    return this.selected;
  }

}
