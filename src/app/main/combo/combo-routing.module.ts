import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComboComponent } from './combo.component';

export const routes: Routes = [
  { path: '', component: ComboComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComboRoutingModule { }
