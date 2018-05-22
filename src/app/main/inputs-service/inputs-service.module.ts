import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InputsServiceComponent } from './inputs-service.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { InputsServiceRoutingModule } from './inputs-service-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    InputsServiceRoutingModule
  ],
  declarations: [
    InputsServiceComponent
  ]
})
export class InputsServiceModule { }
