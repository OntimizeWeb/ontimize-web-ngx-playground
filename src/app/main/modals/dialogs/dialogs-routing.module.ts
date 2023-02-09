import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogsComponent } from './dialogs.component';

export const routes: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Dialog' }, component: DialogsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogsRoutingModule { }
