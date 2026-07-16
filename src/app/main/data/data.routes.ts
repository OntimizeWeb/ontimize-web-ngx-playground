import { Routes } from '@angular/router';

export const DATA_ROUTES: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Data' }, loadComponent: () => import('./data-home/data-home.component').then(m => m.DataHomeComponent) },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'lists', loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule) },
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
  { path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule) },
  { path: 'data-view', loadChildren: () => import('./data-view/data-view.module').then(m => m.DataViewModule) },
  { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) }
];
