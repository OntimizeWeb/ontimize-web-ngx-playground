import { Component } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

const VALIDATORS_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input fxFlex attr="input" label="Text" [validators]="validatorsArray"></o-text-input>

    <o-text-input fxFlex attr="input2" label="Text">
      <o-validator error-name="requiredB" error-text="Must contain a 'b'" [validator-function]="bValidator"></o-validator>
    </o-text-input>

    <o-text-input fxFlex attr="input3" label="Text">
      <o-validator [validator-function]="aValidator">
        <o-error name="requiredLowercaseA" text="Must contain a lowercase 'a'"></o-error>
        <o-error name="requiredUppercaseA" text="Must contain a uppercase 'A'"></o-error>
      </o-validator>
    </o-text-input>

  </o-form>
`;

const VALIDATORS_TS_DATA = `
  import { Component } from '@angular/core';
  import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

  @Component({
    selector: 'validators',
    templateUrl: 'validators.component.html'
  })
  export class ValidatorsComponent {

    validatorsArray: ValidatorFn[] = [];

    constructor() {
      this.validatorsArray.push(this.aValidator);
      this.validatorsArray.push(this.bValidator);
    }

    aValidator(control: FormControl): ValidationErrors {
      let result = {};
      if (control.value && control.value.indexOf('a') === -1) {
        result['requiredLowercaseA'] = true;
      }
      if (control.value && control.value.indexOf('A') === -1) {
        result['requiredUppercaseA'] = true;
      }
      return result;
    }

    bValidator(control: FormControl): ValidationErrors {
      if (control.value && control.value.indexOf('b') === -1) {
        return {
          'requiredB': true
        };
      }
      return {};
    }
  }
`;

@Component({
  selector: 'validators',
  templateUrl: 'validators.component.html'
})
export class ValidatorsComponent {

  files = {
    'html': {
      'data': VALIDATORS_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': VALIDATORS_TS_DATA
    }
  };

  validatorsArray: ValidatorFn[] = [];

  constructor() {
    this.validatorsArray.push(this.aValidator);
    this.validatorsArray.push(this.bValidator);
  }

  aValidator(control: FormControl): ValidationErrors {
    let result = {};
    if (control.value && control.value.toString().indexOf('a') === -1) {
      result['requiredLowercaseA'] = true;
    }
    if (control.value && control.value.toString().indexOf('A') === -1) {
      result['requiredUppercaseA'] = true;
    }
    return result;
  }

  bValidator(control: FormControl): ValidationErrors {
    if (control.value && control.value.toString().indexOf('b') === -1) {
      return {
        'requiredB': true
      };
    }
    return {};
  }
}
