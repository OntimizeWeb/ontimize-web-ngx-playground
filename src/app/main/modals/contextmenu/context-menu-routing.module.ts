import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContextMenuComponent } from './context-menu.component';

export const routes: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Context menu' }, component: ContextMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextMenuRoutingModule { }
