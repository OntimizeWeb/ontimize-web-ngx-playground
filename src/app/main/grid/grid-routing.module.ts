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
      { path: 'basic', component: GridBasicComponent },
      { path: 'fixed', component: GridFixedComponent },
      { path: 'hybrid', component: GridHybridComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
