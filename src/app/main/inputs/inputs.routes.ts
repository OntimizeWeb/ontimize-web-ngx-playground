import { Routes } from '@angular/router';

// Sub-components are non-standalone — loaded via InputsModule declarations.
// This file exposes the same routes as inputs-routing.module.ts for use
// with loadChildren(() => import('./inputs.routes').then(m => m.INPUTS_ROUTES)).
import { InputDateRangeLegacyComponent } from './21.daterange/date-range-legacy/date-range.component';
import { InputOverviewComponent } from './00.overview/input-overview.component';
import { InputTextComponent } from './01.text/input-text.component';
import { InputDateComponent } from './02.date/input-date.component';
import { InputIntegerComponent } from './03.integer/input-integer.component';
import { InputRealComponent } from './04.real/input-real.component';
import { InputPercentComponent } from './05.percent/input-percent.component';
import { InputCurrencyComponent } from './06.currency/input-currency.component';
import { InputNIFComponent } from './07.nif/input-nif.component';
import { InputEmailComponent } from './08.email/input-email.component';
import { InputPasswordComponent } from './09.password/input-password.component';
import { InputTextareaComponent } from './10.textarea/input-textarea.component';
import { InputFileComponent } from './11.file/input-file.component';
import { InputCheckboxComponent } from './12.checkbox/input-checkbox.component';
import { InputComboComponent } from './13.combo/input-combo.component';
import { InputListpickerComponent } from './14.listpicker/input-listpicker.component';
import { HTMLInputComponent } from './15.html/input-html.component';
import { InputHourComponent } from './16.hour/input-hour.component';
import { InputTimeComponent } from './17.time/input-time.component';
import { InputRadioComponent } from './18.radio/input-radio.component';
import { InputSlidetoggleComponent } from './19.slidetoggle/input-slidetoggle.component';
import { InputSliderComponent } from './20.slider/input-slider.component';
import { InputDateRangeComponent } from './21.daterange/date-range/date-range.component';
import { InputPhoneComponent } from './22.phone/input-phone.component';
import { AppearanceComponent } from './96.appearance/appearance.component';
import { InputEventsComponent } from './97.events/events.component';
import { ClearComponent } from './98.clear/clear.component';
import { ValidatorsComponent } from './99.validators/validators.component';
import { StandaloneFormComponent } from './standalone-form/standalone-form.component';
import { InputsHomeComponent } from './inputs-home/inputs-home.component';
import { InputsComponent } from './inputs.component';

export const INPUTS_ROUTES: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Input fields' }, component: InputsHomeComponent },
  {
    path: '', component: InputsComponent, children: [
      { path: 'overview', data: { oAppHeaderTitle: 'Input fields' }, component: InputOverviewComponent },
      { path: 'text', data: { oAppHeaderTitle: 'Input fields' }, component: InputTextComponent },
      { path: 'date', data: { oAppHeaderTitle: 'Input fields' }, component: InputDateComponent },
      { path: 'daterangelegacy', data: { oAppHeaderTitle: 'Input fields' }, component: InputDateRangeLegacyComponent },
      { path: 'daterange', data: { oAppHeaderTitle: 'Input fields' }, component: InputDateRangeComponent },
      { path: 'integer', data: { oAppHeaderTitle: 'Input fields' }, component: InputIntegerComponent },
      { path: 'real', data: { oAppHeaderTitle: 'Input fields' }, component: InputRealComponent },
      { path: 'percent', data: { oAppHeaderTitle: 'Input fields' }, component: InputPercentComponent },
      { path: 'currency', data: { oAppHeaderTitle: 'Input fields' }, component: InputCurrencyComponent },
      { path: 'nif', data: { oAppHeaderTitle: 'Input fields' }, component: InputNIFComponent },
      { path: 'email', data: { oAppHeaderTitle: 'Input fields' }, component: InputEmailComponent },
      { path: 'password', data: { oAppHeaderTitle: 'Input fields' }, component: InputPasswordComponent },
      { path: 'textarea', data: { oAppHeaderTitle: 'Input fields' }, component: InputTextareaComponent },
      { path: 'html', data: { oAppHeaderTitle: 'Input fields' }, component: HTMLInputComponent },
      { path: 'file', data: { oAppHeaderTitle: 'Input fields' }, component: InputFileComponent },
      { path: 'checkbox', data: { oAppHeaderTitle: 'Input fields' }, component: InputCheckboxComponent },
      { path: 'combo', data: { oAppHeaderTitle: 'Input fields' }, component: InputComboComponent },
      { path: 'listpicker', data: { oAppHeaderTitle: 'Input fields' }, component: InputListpickerComponent },
      { path: 'hour', data: { oAppHeaderTitle: 'Input fields' }, component: InputHourComponent },
      { path: 'time', data: { oAppHeaderTitle: 'Input fields' }, component: InputTimeComponent },
      { path: 'radio', data: { oAppHeaderTitle: 'Input fields' }, component: InputRadioComponent },
      { path: 'slidetoggle', data: { oAppHeaderTitle: 'Input fields' }, component: InputSlidetoggleComponent },
      { path: 'slider', data: { oAppHeaderTitle: 'Input fields' }, component: InputSliderComponent },
      { path: 'phone', data: { oAppHeaderTitle: 'Input fields' }, component: InputPhoneComponent },
      { path: 'appearance', data: { oAppHeaderTitle: 'Input fields' }, component: AppearanceComponent },
      { path: 'events', data: { oAppHeaderTitle: 'Input fields' }, component: InputEventsComponent },
      { path: 'clear', data: { oAppHeaderTitle: 'Input fields' }, component: ClearComponent },
      { path: 'validators', data: { oAppHeaderTitle: 'Input fields' }, component: ValidatorsComponent },
      { path: 'standalone-form', data: { oAppHeaderTitle: 'Input fields' }, component: StandaloneFormComponent }
    ]
  }
];
