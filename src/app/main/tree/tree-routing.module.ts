import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeExample1Component } from './example1/example1.component';

export const routes: Routes = [
  { path: '', component: TreeExample1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
