import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainersBasicComponent } from './containers-basic/containers-basic.component';
import { ContainersCollapsibleComponent } from './containers-collapsible/containers-collapsible.component';
import { ContainersComponent } from './containers.component';

export const routes: Routes = [{
  path: '', component: ContainersComponent, children: [
    { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
    { path: 'basic', component: ContainersBasicComponent },
    { path: 'collapsible', component: ContainersCollapsibleComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
