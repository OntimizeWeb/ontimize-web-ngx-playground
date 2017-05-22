import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ButtonsComponent
  ],
  declarations: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
