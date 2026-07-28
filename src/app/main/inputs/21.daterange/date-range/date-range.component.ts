import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import * as moment from 'moment';
import { DateTime } from 'luxon';

const DATE_HTML_DATA = `
<o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-daterange-input attr="daterange1" label="INPUT.BUTTON.DATERANGERANGE" required="yes" [data]="valueTimestamp">
      </o-daterange-input>
    </div>
    <div fxLayout="column" layout-padding>
      <o-daterange-input attr="daterange2" label="INPUT.BUTTON.DATERANGE" read-only="no" required="yes" [data]="valueTimestamp"
        format="DD" separator=" to " touch-ui="{mode}">
      </o-daterange-input>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-daterange-input attr="daterange3" label="INPUT.BUTTON.DATERANGE" enabled="no" [data]="valueTimestamp">
      </o-daterange-input>
    </div>
  </o-form>
`;

const DATE_HTML_MINMAX = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-daterange-input attr="daterange4" label="INPUT.BUTTON.DATERANGE" read-only="no" required="yes" [data]="valueString"
        min="15/05/2019" max="20/06/2019" format="dd/MM/yyyy" value-type="string" touch-ui="{mode}">
      </o-daterange-input>
    </div>

  </o-form>
`;


const DATE_TS_DATA = `
export class InputDateRangeComponent {

 valueTimestamp: { startDate: number; endDate: number; };
  valueString: { startDate: string; endDate: string; };
  valueDate: { startDate: Date; endDate: Date; };
  valueIso8601: { startDate: string; endDate: string; };

  constructor() { }

  ngOnInit(): void {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };

    this.valueTimestamp = {
      startDate: this.selected['startDate'].valueOf(),
      endDate: this.selected['endDate'].valueOf()
    }

    this.valueString = {
      startDate: '2019/05/15',
      endDate: '2019/05/20'
    };

    this.valueDate = {
      startDate: this.selected['startDate'].toDate(),
      endDate: this.selected['endDate'].toDate()
    }

    this.valueIso8601 = {
      startDate: this.selected['startDate'].toISOString(),
      endDate: this.selected['endDate'].toISOString()
    }

  }

  customDateClass = (dt: DateTime) => {
      // Highlight the 1st of each month.
      return (dt.day === 1) ? 'example-custom-date-class' : '';
    }
}
`;

const DATERANGE_HTML_DATA_TYPES = ` <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DATE.VALUE_TYPE.TIMESTAMP' | oTranslate }}</label>
      <o-daterange-input #valueTypeTimestamp value-type="timestamp" attr="valueTypeInput" label="INPUT.BUTTON.DATERANGE"
        [data]="valueTimestamp" read-only="no" required="yes" clear-button="yes" touch-ui="{mode}">
      </o-daterange-input>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DATE.VALUE_TYPE.STRING' | oTranslate }}</label>
      <o-daterange-input value-type="string" format="yyyy/MM/dd" attr="valueTypeInput2" label="INPUT.BUTTON.DATERANGE"
        [data]="valueString" read-only="no" required="yes" clear-button="yes" touch-ui="{mode}"></o-daterange-input>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DATE.VALUE_TYPE.DATE' | oTranslate }}</label>
      <o-daterange-input value-type="date" attr="valueTypeInput3" label="INPUT.BUTTON.DATERANGE" [data]="valueDate" read-only="no"
        required="yes" clear-button="yes" touch-ui="{mode}"></o-daterange-input>
    </div>

    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DATE.VALUE_TYPE.ISO-8601' | oTranslate }}</label>
      <o-daterange-input value-type="iso-8601" attr="valueTypeInput4" label="INPUT.BUTTON.DATERANGE" [data]="valueIso8601"
        read-only="no" required="yes" clear-button="yes" touch-ui="{mode}"></o-daterange-input>
    </div>
  </o-form>`;

const DATE_SCSS_CUSTOM_CLASS = `
  button.example-custom-date-class {
    background: orange;
    border-radius: 100%;
  }
`;


const DATE_HTML_CUSTOM_CLASS = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <o-daterange-input attr="customDateClass" label="INPUT.BUTTON.DATERANGE" read-only="no" required="yes"
        [date-class]="customDateClass" touch-ui="{mode}">
      </o-daterange-input>
    </div>
  </o-form>
`;

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputDateRangeComponent {

  @ViewChild('mode', { static: true }) mode: MatSlideToggle;
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

  public valueTypeFiles = {
    html: {
      data: DATERANGE_HTML_DATA_TYPES
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
      data: DATE_TS_DATA
    }

  }
  valueTimestamp: { startDate: number; endDate: number; };
  valueString: { startDate: string; endDate: string; };
  valueDate: { startDate: Date; endDate: Date; };
  valueIso8601: { startDate: string; endDate: string; };

  constructor() { }

  ngOnInit(): void {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };

    this.valueTimestamp = {
      startDate: this.selected['startDate'].valueOf(),
      endDate: this.selected['endDate'].valueOf()
    }

    this.valueString = {
      startDate: '2019/05/15',
      endDate: '2019/05/20'
    };

    this.valueDate = {
      startDate: this.selected['startDate'].toDate(),
      endDate: this.selected['endDate'].toDate()
    }

    this.valueIso8601 = {
      startDate: this.selected['startDate'].toISOString(),
      endDate: this.selected['endDate'].toISOString()
    }

  }

  onShowSource(key: string, exampleComp?: any) {
    const itemData: any = {
      mode: this.mode.checked
    };

    exampleComp.html = this.getHtml(key, itemData);
  }

  public getHtml(key: string, data: any) {
    let tpl = '';
    switch (key) {
      case 'o-daterange':
        tpl = DATE_HTML_DATA;
        break;
      case 'o-daterange-minmax':
        tpl = DATE_HTML_MINMAX;
        break;
      case 'o-daterange-dateclass':
        tpl = DATE_HTML_CUSTOM_CLASS;
        break;
      case 'o-daterange-valuetypes':
        tpl = DATERANGE_HTML_DATA_TYPES;
    }

    tpl = tpl.replace('{mode}', data.mode);

    return tpl;
  }


  // date-class receives a Luxon DateTime (the active OntimizeLuxonDateAdapter is the default);
  // annotate as Moment instead if the moment adapter is active via provideODateAdapter('moment').
  customDateClass = (dt: DateTime) => {
    // Highlight the 1st of each month.
    return (dt.day === 1) ? 'example-custom-date-class' : '';
  }

}
