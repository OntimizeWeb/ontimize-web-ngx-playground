import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextMenuComponent } from './context-menu.component';

export const routes: Routes = [
  { path: '', component: ContextMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextMenuRoutingModule { }
