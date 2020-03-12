import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogsComponent } from './dialogs.component';

export const routes: Routes = [
  { path: '', component: DialogsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogsRoutingModule { }
