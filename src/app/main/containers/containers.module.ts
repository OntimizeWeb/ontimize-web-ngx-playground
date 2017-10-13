import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ContainersComponent } from './containers.component';
import { ContainersRoutingModule } from './containers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ContainersRoutingModule
  ],
  declarations: [
    ContainersComponent
  ]
})
export class ContainersModule { }
