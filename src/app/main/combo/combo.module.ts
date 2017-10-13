import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ComboComponent } from './combo.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ComboRoutingModule } from './combo-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ComboRoutingModule
  ],
  declarations: [
    ComboComponent
  ]
})
export class ComboModule { }
