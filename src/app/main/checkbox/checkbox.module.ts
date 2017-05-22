import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CheckboxComponent
  ],
  declarations: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
