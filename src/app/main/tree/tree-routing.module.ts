import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree.component';

import { TreeBasicComponent } from './01.basic/tree-basic.component';

export const routes: Routes = [
  {
    path: '', component: TreeComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', component: TreeBasicComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
