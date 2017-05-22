import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ComboComponent } from './combo.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ComboComponent
  ],
  exports: [
    ComboComponent
  ]
})
export class ComboModule { }
