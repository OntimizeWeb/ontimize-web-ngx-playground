import { Component, ViewChild } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';

const CHECKBOX_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-checkbox attr="check" label="Checkbox" [data]="getValue()"></o-checkbox>

    <o-checkbox attr="check1" label="Checkbox" [data]="getValue()" read-only="no" ></o-checkbox>

    <o-checkbox attr="check2" label="Checkbox" enabled="no"></o-checkbox>

  </o-form>
`;

const CHECKBOX_TS_DATA = `
@Component({
  selector: 'input-checkbox',
  templateUrl: 'input-checkbox.component.html'
})
export class InputCheckboxComponent {
 
  getValue() {
    return true;
  }

}
`;
const CHECKBOX_HTML_VALUETYPE = `
<o-form  editable-detail="no" show-header="no" layout-direction="row">
  <div fxLayout="column" layout-padding fxFlex="30">
    <label class="input-comp-title">{{ 'INPUTS.CHECKBOXBOOLEANTYPE_NUMBER' | oTranslate }}</label>
    <o-checkbox attr="check4" boolean-type="number" label="{{ 'INPUT.BUTTON.CHECKBOX' | oTranslate }}"
      [data]="getValueBooleanType('number')" read-only="no" false-value="0" true-value="1"></o-checkbox>
  </div>
  <div fxLayout="column" layout-padding fxFlex="30">
    <label class="input-comp-title">{{ 'INPUTS.CHECKBOXBOOLEANTYPE_BOOLEAN' | oTranslate }}</label>
    <o-checkbox attr="check5" boolean-type="boolean" label="{{ 'INPUT.BUTTON.CHECKBOX' | oTranslate }}"
      [data]="getValueBooleanType('boolean')" read-only="no" false-value="false" true-value="true"></o-checkbox>
  </div>
  <div fxLayout="column" layout-padding fxFlex="30">
    <label class="input-comp-title">{{ 'INPUTS.CHECKBOXBOOLEANTYPE_STRING' | oTranslate }}</label>
    <o-checkbox attr="check7" boolean-type="string" label="{{ 'INPUT.BUTTON.CHECKBOX' | oTranslate }}"
      [data]="getValueBooleanType('string')" read-only="no" false-value="N" true-value="Y"></o-checkbox>
  </div>
</o-form>
`


const CHECKBOX_TS_VALUETYPE = `
  @Component({
    selector: 'input-checkbox',
    templateUrl: 'input-checkbox.component.html'
  })
  export class InputCheckboxComponent {
   
    getValueBooleanType(type) {
      switch (type) {
        case 'number':
          return 1;
        case 'boolean':
          return false;
        case 'string':
          return 'Y'
      }
    }
  }`;

@Component({
  selector: 'input-checkbox',
  templateUrl: 'input-checkbox.component.html'
})
export class InputCheckboxComponent {

  @ViewChild('form2') form2: OFormComponent;

  files = {
    'html': {
      'data': CHECKBOX_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': CHECKBOX_TS_DATA
    }
  };

  filesValueType = {
    'html': {
      'data': CHECKBOX_HTML_VALUETYPE
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': CHECKBOX_TS_VALUETYPE
    }
  };

  getValue() {
    return true;
  }

  getValueBooleanType(type) {
    switch (type) {
      case 'number':
        return 1;
      case 'boolean':
        return false;
      case 'string':
        return 'Y'
    }
  }

}
