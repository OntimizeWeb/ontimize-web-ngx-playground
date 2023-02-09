import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutHomeComponent
  ]
})
export class LayoutModule { }
