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
import { OComboRendererComponent } from './14.combo-renderer/combo-custom-render/combo-custom-render.component';
import { InputComboCustomRenderComponent } from './14.combo-renderer/input-combo-custom-render.component';
import { InputListpickerComponent } from './15.listpicker/input-listpicker.component';
import { InputListpickerCustomRenderComponent } from './16.listpicker-renderer/input-listpicker-custom-render.component';
import {
  OListPickerRendererComponent
} from './16.listpicker-renderer/listpicker-custom-render/listpicker-custom-render.component';
import { HTMLInputComponent } from './17.html/input-html.component';
import { InputHourComponent } from './18.hour/input-hour.component';
import { InputTimeComponent } from './19.time/input-time.component';
import { InputRadioComponent } from './20.radio/input-radio.component';
import { InputSlidetoggleComponent } from './21.slidetoggle/input-slidetoggle.component';
import { InputSliderComponent } from './22.slider/input-slider.component';
import { InputDateRangeComponent } from './23.daterange/date-range/date-range.component';
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
    InputComboCustomRenderComponent,
    InputListpickerComponent,
    InputListpickerCustomRenderComponent,
    InputHourComponent,
    InputTimeComponent,
    ValidatorsComponent,
    ClearComponent,
    InputEventsComponent,
    InputRadioComponent,
    AppearanceComponent,
    InputSlidetoggleComponent,
    InputSliderComponent,
    InputDateRangeComponent,
    OComboRendererComponent,
    OListPickerRendererComponent
  ]
})
export class InputsModule { }
