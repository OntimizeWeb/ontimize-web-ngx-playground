import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeComponent } from './tree.component';

export const routes: Routes = [
  {
    path: '', component: TreeComponent,
    children: [
      { path: 'basic', component: TreeBasicComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
