import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackBarComponent } from './snackbar.component';

export const routes: Routes = [
  { path: '', component: SnackBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackBarRoutingModule { }
