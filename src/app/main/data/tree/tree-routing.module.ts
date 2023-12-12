import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeComponent } from './tree.component';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';

export const routes: Routes = [
  {
    path: '', component: TreeComponent,
    children: [
      { path: 'basic', component: TreeBasicComponent },
      { path: 'nodes', component: TreeNodesComponent },
      { path: 'recursive', component: TreeRecursiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
