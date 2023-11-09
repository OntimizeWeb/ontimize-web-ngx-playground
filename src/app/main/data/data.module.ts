import { GridModule } from './grid/grid.module';
import { ListsModule } from './lists/lists.module';
import { TableModule } from './table/table.module';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { DataHomeComponent } from './data-home/data-home.component';
import { DataRoutingModule } from './data-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DataRoutingModule,
    TableModule,
    ListsModule,
    GridModule
  ],
  declarations: [
    DataHomeComponent
  ]
})
export class DataModule { }