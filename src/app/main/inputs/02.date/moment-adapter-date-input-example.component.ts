import { Component } from '@angular/core';
import { ODateInputComponent, provideODateAdapter } from 'ontimize-web-ngx';

/**
 * Demo: opting into the deprecated moment.js date adapter on Ontimize date
 * components. `provideODateAdapter('moment')` can go in the
 * `bootstrapApplication` / `AppModule` providers (whole app), a route's
 * `providers`, or — as here — any ancestor component's `providers`: every
 * `o-date-input` / `o-daterange-input` / table date editor below it resolves
 * the moment adapter, the `'L'`/`'LL'` default formats and the `oMoment` pipe.
 * Note the `format` input now takes moment tokens (`LL`), not Luxon ones (`DD`).
 */
@Component({
  standalone: true,
  selector: 'moment-adapter-date-input-example',
  imports: [ODateInputComponent],
  providers: [provideODateAdapter('moment')],
  template: `
    <o-date-input attr="momentAdapterDate" label="Date (moment adapter, opt-in)" format="LL" [data]="value"
      read-only="no"></o-date-input>
  `
})
export class MomentAdapterDateInputExampleComponent {
  value = Date.now();
}
