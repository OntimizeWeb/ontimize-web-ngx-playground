import { Component, ViewEncapsulation } from '@angular/core';

const SLIDE_HTML_DATA = `
 <o-form editable-detail="false" show-header="no">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-slider attr="slider" [data]="getValue()"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider #slider attr="slider-editable" [data]="getValue()" read-only="no"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-slider attr="slider-disabled" enabled="no" [data]="getValue()"></o-slider>
    </div>
  </o-form>
`;
const SLIDE_FORMATTING_THUMBLABEL_HTML_DATA = `
   <o-form editable-detail="false" show-header="no">
    <div fxLayout="column" layout-padding fxFlex="80">
      <o-slider attr="slider-editable" [data]="getValue()" read-only="no" color="warn" max="100" min="0" thumb-label="true"
        show-tick-marks="yes" [display-with]="formatLabel"></o-slider>
    </div>
  </o-form>
`;

const SLIDE_TS_DATA = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-slider',
  templateUrl: './input-slider.component.html'
})

export class InputSliderComponent {

  getValue() {
    return 10;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return  value +'%';

  }

}
`;

@Component({
  selector: 'input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputSliderComponent {

  files = {
    'html': {
      'data': SLIDE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': SLIDE_TS_DATA
    }
  };

  files_formatting_thumblabel = {
    'html': {
      'data': SLIDE_FORMATTING_THUMBLABEL_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': SLIDE_TS_DATA
    }
  };

  getValue() {
    return 10;
  }

  formatLabel(value: number) {
    if (!value) {
      return 0;
    }
    return value + '%';

  }
}
