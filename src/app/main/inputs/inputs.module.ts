import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
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
import { AppearanceComponent } from './96.appearance/appearance.component';
import { InputEventsComponent } from './97.events/events.component';
import { ClearComponent } from './98.clear/clear.component';
import { ValidatorsComponent } from './99.validators/validators.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { InputsComponent } from './inputs.component';

@NgModule({
  // providers: [
    // { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } }
    // { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } },
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  // ],
  imports: [
    SharedModule,
    OntimizeWebModule,
    InputsRoutingModule
  ],
  declarations: [
    InputsComponent,
    InputOverviewComponent,
    InputTextComponent,
    InputDateComponent,
    InputIntegerComponent,
    InputRealComponent,
    InputPercentComponent,
    InputCurrencyComponent,
    InputNIFComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    HTMLInputComponent,
    InputFileComponent,
    InputCheckboxComponent,
    InputComboComponent,
    InputListpickerComponent,
    InputHourComponent,
    InputTimeComponent,
    ValidatorsComponent,
    ClearComponent,
    InputEventsComponent,
    InputRadioComponent,
    AppearanceComponent,
    InputSlidetoggleComponent,
    InputSliderComponent,
    InputDateRangeComponent
  ]
})
export class InputsModule { }
