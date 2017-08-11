import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { DialogsComponent } from './dialogs.component';
import { DialogsRoutingModule } from './dialogs-routing.module';

@NgModule({
   imports: [
    SharedModule,
    OntimizeWebModule,
    DialogsRoutingModule
  ],
  declarations: [
    DialogsComponent
  ]
})
export class DialogsModule { }
