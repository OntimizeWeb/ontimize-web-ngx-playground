import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataHomeComponent } from './data-home/data-home.component';

export const routes: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Data' }, component: DataHomeComponent },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'lists', loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule) },
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
  { path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
