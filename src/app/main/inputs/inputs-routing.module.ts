import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ValidatorsComponent } from './99.validators/validators.component';
import { InputsComponent } from './inputs.component';

export const routes: Routes = [
  {
    path: '', component: InputsComponent, children: [
      { path: '', component: InputOverviewComponent },
      { path: 'text', data: { oAppHeaderTitle: 'Text input' }, component: InputTextComponent },
      { path: 'date', data: { oAppHeaderTitle: 'Date input' }, component: InputDateComponent },
      { path: 'daterange', data: { oAppHeaderTitle: 'Date range input' }, component: InputDateRangeComponent },
      { path: 'integer', data: { oAppHeaderTitle: 'Integer input' }, component: InputIntegerComponent },
      { path: 'real', data: { oAppHeaderTitle: 'Real input' }, component: InputRealComponent },
      { path: 'percent', data: { oAppHeaderTitle: 'Percentage input' }, component: InputPercentComponent },
      { path: 'currency', data: { oAppHeaderTitle: 'Currency input' }, component: InputCurrencyComponent },
      { path: 'nif', data: { oAppHeaderTitle: 'NIF input' }, component: InputNIFComponent },
      { path: 'email', data: { oAppHeaderTitle: 'Email input' }, component: InputEmailComponent },
      { path: 'password', data: { oAppHeaderTitle: 'Password input' }, component: InputPasswordComponent },
      { path: 'textarea', data: { oAppHeaderTitle: 'Text area input' }, component: InputTextareaComponent },
      { path: 'html', data: { oAppHeaderTitle: 'HTML input' }, component: HTMLInputComponent },
      { path: 'file', data: { oAppHeaderTitle: 'File input' }, component: InputFileComponent },
      { path: 'checkbox', data: { oAppHeaderTitle: 'Checkbox input' }, component: InputCheckboxComponent },
      { path: 'combo', data: { oAppHeaderTitle: 'Combo input' }, component: InputComboComponent },
      { path: 'listpicker', data: { oAppHeaderTitle: 'List picker input' }, component: InputListpickerComponent },
      { path: 'hour', data: { oAppHeaderTitle: 'Hour input' }, component: InputHourComponent },
      { path: 'time', data: { oAppHeaderTitle: 'Time input' }, component: InputTimeComponent },
      { path: 'validators', component: ValidatorsComponent },
      { path: 'radio', data: { oAppHeaderTitle: 'Radio input' }, component: InputRadioComponent },
      { path: 'slidetoggle', data: { oAppHeaderTitle: 'Slide toggle input' }, component: InputSlidetoggleComponent },
      { path: 'slider', data: { oAppHeaderTitle: 'Slider input' }, component: InputSliderComponent },
      { path: 'phone', data: { oAppHeaderTitle: 'Phone input' }, component: InputPhoneComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
