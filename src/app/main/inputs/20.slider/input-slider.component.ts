import { Component } from '@angular/core';

const SLIDE_HTML_DATA = `
<o-form editable-detail="false" show-header="no">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-slider attr="slider" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue()"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider #slider attr="slider-editable" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue()" tooltip="This is an awesome tooltip!"
        read-only="no"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-slider attr="slider-disabled" label="{{ 'INPUT.SLIDER' | oTranslate }}" enabled="no" [data]="getValue()"></o-slider>
    </div>
  </o-form>
  <o-form editable-detail="false" show-header="no" layout-direction="row">
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-slider attr="slider" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue()" [vertical]="true" color="warn"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider attr="slider-editable" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue()" read-only="no"
        tooltip="This is an awesome tooltip!" vertical="true" color="warn" max="100" min="0" thumb-label="true"
        tick-interval="auto"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-slider attr="slider-disabled" label="{{ 'INPUT.SLIDER' | oTranslate }}" enabled="no" [vertical]="true" color="warn"
        [data]="getValue()"></o-slider>
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

}
`;

@Component({
  selector: 'input-slider',
  templateUrl: './input-slider.component.html'
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

  getValue() {
    return 10;
  }

}
