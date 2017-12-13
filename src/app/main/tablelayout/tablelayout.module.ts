import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TableLayoutComponent } from './tablelayout.component';
import { TableLayoutRoutingModule } from './tablelayout-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TableLayoutRoutingModule
  ],
  declarations: [
    TableLayoutComponent
  ]
})
export class TableLayoutModule { }
