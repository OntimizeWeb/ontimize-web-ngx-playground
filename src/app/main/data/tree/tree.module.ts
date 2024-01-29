import { NgModule } from '@angular/core';
import { OTreeModule, OntimizeWebModule } from 'ontimize-web-ngx';
import { TreeComponent } from './tree.component';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { SharedModule } from '../../../shared/shared.module';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';
import { DetailModule } from './04.detail/detail.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OTreeModule,
    TreeRoutingModule,
    DetailModule
  ],
  declarations: [
    TreeComponent,
    TreeBasicComponent,
    TreeNodesComponent,
    TreeRecursiveComponent,

  ]
})
export class TreeModule { }
