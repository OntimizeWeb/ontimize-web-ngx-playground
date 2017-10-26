import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TableRoutingModule
  ],
  declarations: [
    TableComponent
  ]
})
export class TableModule { }
