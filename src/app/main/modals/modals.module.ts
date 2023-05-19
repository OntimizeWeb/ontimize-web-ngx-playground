import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { ModalsHomeComponent } from './modals-home/modals-home.component';
import { ModalsRoutingModule } from './modals-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ModalsRoutingModule
  ],
  declarations: [
    ModalsHomeComponent
  ]
})
export class ModalsModule { }
