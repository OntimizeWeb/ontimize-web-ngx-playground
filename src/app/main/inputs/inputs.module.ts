import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InputsComponent } from './inputs.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    InputsComponent
  ],
  declarations: [
    InputsComponent
  ]
})
export class InputsModule { }
