import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DialogsComponent } from './dialogs.component';

@NgModule({
   imports: [
    SharedModule
  ],
  exports: [
    DialogsComponent
  ],
  declarations: [
    DialogsComponent
  ]
})
export class DialogsModule { }
