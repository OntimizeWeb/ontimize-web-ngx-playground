import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';
import { TreeComponent } from './tree.component';

export const routes: Routes = [
  {
    path: '', component: TreeComponent,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', component: TreeBasicComponent },
      { path: 'nodes', component: TreeNodesComponent },
      { path: 'recursive', component: TreeRecursiveComponent },
      { path: 'detail', loadChildren: () => import('./04.detail/detail.module').then(m => m.DetailModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
