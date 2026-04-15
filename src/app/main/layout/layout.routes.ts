import { Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';

export const LAYOUT_ROUTES: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Layout' }, component: LayoutHomeComponent },
  { path: 'containers', loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule) },
  { path: 'layout-manager', loadChildren: () => import('./layout-manager/layout-manager.module').then(m => m.LayoutManagerModule) }
];
