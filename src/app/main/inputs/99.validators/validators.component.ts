import { Component } from '@angular/core';
import { AsyncValidatorFn, UntypedFormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ErrorData } from 'ontimize-web-ngx';
import { AsyncValidatorsHelper, CharValidatorService } from './validators.utils';

const VALIDATORS_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.INPUT' | oTranslate }}: must contain 'a', 'A' and 'b'</label>
      <o-text-input fxFlex
        attr="input"
        label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}"
        read-only="no"
        [validators]="validatorsArray"
        [validators-errors]="validatorsErrorsArray">
      </o-text-input>
    </div>

    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.O-VALIDATOR' | oTranslate }}: {{ required ? 'required and' : ''}} must contain 'b' and minLength {{ minLength }}</label>
      <o-text-input fxFlex attr="input2" [min-length]="minLength" [required]="required" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" read-only="no">
        <o-validator error-name="requiredB" error-text="Must contain a 'b'" [validator-function]="bValidator"></o-validator>
      </o-text-input>
    </div>

    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.O-ERROR' | oTranslate }}: must contain 'a' and 'A' </label>
      <o-text-input fxFlex attr="input3" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" read-only="no">
        <o-validator [validator-function]="aValidator">
          <o-error name="requiredLowercaseA" text="Must contain a lowercase 'a'"></o-error>
          <o-error name="requiredUppercaseA" text="Must contain a uppercase 'A'"></o-error>
        </o-validator>
      </o-text-input>
    </div>
  </o-form>
`;

const VALIDATORS_TS_DATA = `
  import { Component } from '@angular/core';
  import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
  import { ErrorData } from 'ontimize-web-ngx';

  @Component({
    selector: 'validators',
    templateUrl: 'validators.component.html'
  })
  export class ValidatorsComponent {

    validatorsArray: ValidatorFn[] = [];

    validatorsErrorsArray: ErrorData[] = [{
      name: 'requiredLowercaseA',
      text: 'Must contain a lowercase "a"'
    }, {
      name: 'requiredUppercaseA',
      text: 'Must contain a uppercase "A"'
    }, {
      name: 'requiredB',
      text: 'Must contain a "b"'
    }];

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

const ASYNC_VALIDATORS_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.INPUT' | oTranslate }}: must contain 'a', 'A' and 'b'</label>
      <o-text-input
        fxFlex
        attr="asyncInput"
        label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}"
        [async-validators]="asyncValidatorsArray"
        [validators-errors]="validatorsErrorsArray"
        read-only="no">
      </o-text-input>
    </div>

    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.O-VALIDATOR' | oTranslate }}: {{ required ? 'required and' : ''}} must contain 'b' and minLength {{ minLength }}</label>
      <o-text-input fxFlex attr="asyncInput2" [min-length]="minLength" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" read-only="no">
        <o-validator error-name="requiredB" error-text="Must contain a 'b'" [async-validator-function]="asyncBValidator"></o-validator>
      </o-text-input>
    </div>

    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{{ 'INPUTS.VALIDATOR.O-ERROR' | oTranslate }}: must contain 'a' and 'A'</label>
      <o-text-input fxFlex attr="asyncInput3" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" read-only="no">
        <o-validator [async-validator-function]="asyncLowercaseAValidator">
          <o-error name="requiredLowercaseA" text="Must contain a lowercase 'a'"></o-error>
        </o-validator>
        <o-validator [async-validator-function]="asyncUppercaseAValidator">
          <o-error name="requiredUppercaseA" text="Must contain a uppercase 'A'"></o-error>
        </o-validator>
      </o-text-input>
    </div>
  </o-form>
`;

const ASYNC_VALIDATORS_TS_DATA = `
  import { Component } from '@angular/core';
  import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
  import { ErrorData } from 'ontimize-web-ngx';

  @Component({
    selector: 'validators',
    templateUrl: 'validators.component.html'
  })
  export class ValidatorsComponent {

    asyncValidatorsArray: AsyncValidatorFn[] = [];

    validatorsErrorsArray: ErrorData[] = [{
      name: 'requiredLowercaseA',
      text: 'Must contain a lowercase "a"'
    }, {
      name: 'requiredUppercaseA',
      text: 'Must contain a uppercase "A"'
    }, {
      name: 'requiredB',
      text: 'Must contain a "b"'
    }];

    asyncBValidator: AsyncValidatorFn;
    asyncLowercaseAValidator: AsyncValidatorFn;
    asyncUppercaseAValidator: AsyncValidatorFn;

    constructor(private charValidatorService: CharValidatorService) {
      this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsLowercaseA()));
      this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsUppercaseA()));
      this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsB()));

      this.asyncLowercaseAValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsLowercaseA())
      this.asyncUppercaseAValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsUppercaseA())
      this.asyncBValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsB())
    }
  }
`;

@Component({
  selector: 'validators',
  templateUrl: 'validators.component.html',
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

  asyncFiles = {
    'html': {
      'data': ASYNC_VALIDATORS_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': ASYNC_VALIDATORS_TS_DATA
    },
    files: [{
      'label': 'validators.utils.ts',
      'type': 'typescript',
      'data': `
  import { Injectable } from "@angular/core";
  import { AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
  import { Observable, of } from "rxjs";
  import { map, delay } from "rxjs/operators";

  export class AsyncValidatorsHelper {
    static createValidator(validator: CharValidator): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return control.value ?
          validator.fn(control.value)
            .pipe(
              map((isValid: boolean) => isValid ? null : validator.error)
            )
          : of(null)
      };
    }
  }

  interface CharValidator {
    fn: (value: string) => Observable<boolean>
    error: { [key: string]: boolean; }
  }

  @Injectable({
    providedIn: 'root',
  })
  export class CharValidatorService {

    containsLowercaseA(): CharValidator {
      return {
        fn: (value: string): Observable<boolean> => {
          return of(value.indexOf('a') !== -1).pipe(delay(1000))
        },
        error: {
          'requiredLowercaseA': true
        }
      }
    }

    containsUppercaseA(): CharValidator {
      return {
        fn: (value: string): Observable<boolean> => {
          return of(value.indexOf('A') !== -1).pipe(delay(1000))
        },
        error: {
          'requiredUppercaseA': true
        }
      }
    }

    containsB(): CharValidator {
      return {
        fn: (value: string): Observable<boolean> => {
          return of(value.indexOf('b') !== -1).pipe(delay(1000))
        },
        error: {
          'requiredB': true
        }
      }
    }
  }
      `
    }]
  };

  validatorsArray: ValidatorFn[] = [];
  validatorsErrorsArray: ErrorData[] = [{
    name: 'requiredLowercaseA',
    text: 'Must contain a lowercase "a"'
  }, {
    name: 'requiredUppercaseA',
    text: 'Must contain a uppercase "A"'
  }, {
    name: 'requiredB',
    text: 'Must contain a "b"'
  }];

  asyncValidatorsArray: AsyncValidatorFn[] = [];

  asyncBValidator: AsyncValidatorFn;
  asyncLowercaseAValidator: AsyncValidatorFn;
  asyncUppercaseAValidator: AsyncValidatorFn;

  required = true;
  minLength = 2;

  constructor(private charValidatorService: CharValidatorService) {
    this.validatorsArray.push(this.aValidator);
    this.validatorsArray.push(this.bValidator);

    this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsLowercaseA()));
    this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsUppercaseA()));
    this.asyncValidatorsArray.push(AsyncValidatorsHelper.createValidator(this.charValidatorService.containsB()));

    this.asyncLowercaseAValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsLowercaseA())
    this.asyncUppercaseAValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsUppercaseA())
    this.asyncBValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsB())
  }

  aValidator(control: UntypedFormControl): ValidationErrors {
    let result = {};
    if (control.value && control.value.toString().indexOf('a') === -1) {
      result['requiredLowercaseA'] = true;
    }
    if (control.value && control.value.toString().indexOf('A') === -1) {
      result['requiredUppercaseA'] = true;
    }
    return result;
  }

  bValidator(control: UntypedFormControl): ValidationErrors {
    if (control.value && control.value.toString().indexOf('b') === -1) {
      return {
        'requiredB': true
      };
    }
    return {};
  }

  changeParams() {
    this.required = !this.required;
    this.minLength += 2;
  }
}
