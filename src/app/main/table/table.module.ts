import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { OTableColumnRendererCardTypeComponent } from './render/o-table-column-renderer-cardtype.component';
import { OTableColumnRendererBalanceComponent } from './render/o-table-column-renderer-balance.component';
import { OTableColumnRendererTotalReadyComponent } from './render/o-table-column-renderer-totalready.component';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TableRoutingModule
  ],
  declarations: [
    TableComponent,
    OTableColumnRendererCardTypeComponent,
    OTableColumnRendererBalanceComponent,
    OTableColumnRendererTotalReadyComponent

  ]
})
export class TableModule { }
