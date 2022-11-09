import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTranslateService } from 'ontimize-web-ngx';

import { ContainersBasicComponent } from './containers-basic/containers-basic.component';
import { ContainersCollapsibleComponent } from './containers-collapsible/containers-collapsible.component';
import { ContainersComponent } from './containers.component';

export const routes: Routes = [{
  path: '', component: ContainersComponent,
  children: [
    { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
    { path: 'basic', data: { oAppHeaderTitle: 'Basic container' }, component: ContainersBasicComponent },
    { path: 'collapsible', data: { oAppHeaderTitle: 'Collapsible container' }, component: ContainersCollapsibleComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
