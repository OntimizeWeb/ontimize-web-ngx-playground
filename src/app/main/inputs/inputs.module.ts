import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { InputsComponent } from './inputs.component';
import { InputsRoutingModule } from './inputs-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    InputsRoutingModule
  ],
  declarations: [
    InputsComponent
  ]
})
export class InputsModule { }
