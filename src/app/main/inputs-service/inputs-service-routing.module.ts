import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsServiceComponent } from './inputs-service.component';

export const routes: Routes = [
  { path: '', component: InputsServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsServiceRoutingModule { }
