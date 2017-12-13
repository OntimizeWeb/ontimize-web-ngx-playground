import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableLayoutComponent } from './tablelayout.component';

export const routes: Routes = [
  { path: '', component: TableLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableLayoutRoutingModule { }