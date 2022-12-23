import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from './../../../shared/shared.module';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TooltipRoutingModule
  ],
  declarations: [
    TooltipComponent
  ]
})
export class TooltipModule { }
