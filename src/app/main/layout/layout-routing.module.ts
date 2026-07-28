import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';

export const routes: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Layout' }, component: LayoutHomeComponent },
  { path: 'containers', loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule) },
  { path: 'layout-manager', loadChildren: () => import('./layout-manager/layout-manager.module').then(m => m.LayoutManagerModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
