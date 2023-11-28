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
