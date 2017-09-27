import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CheckboxComponent } from './checkbox.component';
import { SharedModule } from '../../shared/shared.module';
import { CheckboxRoutingModule } from './checkbox-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    CheckboxRoutingModule
  ],
  declarations: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
