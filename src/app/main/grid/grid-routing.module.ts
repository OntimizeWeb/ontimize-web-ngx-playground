import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridFixedComponent } from './grid-fixed/grid-fixed.component';
import { GridHybridComponent } from './grid-hybrid/grid-hybrid.component';
import { GridComponent } from './grid.component';


export const routes: Routes = [
  {
    path: '', component: GridComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', data: { oAppHeaderTitle: 'Basic grid' }, component: GridBasicComponent },
      { path: 'fixed', data: { oAppHeaderTitle: 'Fixed grid' }, component: GridFixedComponent },
      { path: 'hybrid', data: { oAppHeaderTitle: 'Hybrid grid' }, component: GridHybridComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
