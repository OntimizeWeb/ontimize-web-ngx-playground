import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputsComponent } from './inputs.component';
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

export const routes: Routes = [
  {
    path: '', component: InputsComponent, children: [
      { path: '', redirectTo: 'text', pathMatch: 'prefix' },
      { path: 'text', component: InputTextComponent },
      { path: 'date', component: InputDateComponent },
      { path: 'integer', component: InputIntegerComponent },
      { path: 'real', component: InputRealComponent },
      { path: 'percent', component: InputPercentComponent },
      { path: 'currency', component: InputCurrencyComponent },
      { path: 'nif', component: InputNIFComponent },
      { path: 'email', component: InputEmailComponent },
      { path: 'password', component: InputPasswordComponent },
      { path: 'textarea', component: InputTextareaComponent },
      { path: 'file', component: InputFileComponent },
      { path: 'checkbox', component: InputCheckboxComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
