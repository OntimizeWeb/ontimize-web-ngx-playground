import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnackBarComponent } from './snackbar.component';

export const routes: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Snackbar' }, component: SnackBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackBarRoutingModule { }
