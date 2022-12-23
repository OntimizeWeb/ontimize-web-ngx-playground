import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from './../../../shared/shared.module';
import { DialogsRoutingModule } from './dialogs-routing.module';
import { DialogsComponent } from './dialogs.component';

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
