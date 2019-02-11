import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridFixedComponent } from './grid-fixed/grid-fixed.component';
import { GridHybridComponent } from './grid-hybrid/grid-hybrid.component';


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
