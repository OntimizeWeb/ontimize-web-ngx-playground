import { Component } from '@angular/core';

const SLIDE_HTML_DATA = `
  <o-form editable-detail="false" show-header="no" layout-direction="row">
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-slider attr="slider" [data]="slider"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider #slider attr="slider-editable" [data]="slider" read-only="no" read-only="no"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-slider attr="slider-disabled" enabled="no" [data]="slider"></o-slider>
    </div>
  </o-form>
  <o-form editable-detail="false" show-header="no" layout-direction="row">
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
      <o-slider attr="slider" [data]="slider" layout="column" color="warn"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider attr="slider-editable" [data]="slider" read-only="no" layout="column" color="warn" max="100" min="0" thumb-label="true"
        tick-interval="auto"></o-slider>
    </div>
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
      <o-slider attr="slider-disabled" enabled="no" layout="column" color="warn" [data]="slider"></o-slider>
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

  protected slider = 10;

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

  protected slider = 10;

}
