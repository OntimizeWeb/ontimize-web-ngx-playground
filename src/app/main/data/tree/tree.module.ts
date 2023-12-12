import { NgModule } from '@angular/core';
import { OTreeModule, OntimizeWebModule } from 'ontimize-web-ngx';
import { TreeComponent } from './tree.component';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OTreeModule,
    TreeRoutingModule
  ],
  declarations: [
    TreeComponent,
    TreeBasicComponent
  ]
})
export class TreeModule { }
