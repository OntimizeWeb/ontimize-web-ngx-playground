import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TooltipComponent } from './tooltip.component';
import { TooltipRoutingModule } from './tooltip-routing.module';

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
