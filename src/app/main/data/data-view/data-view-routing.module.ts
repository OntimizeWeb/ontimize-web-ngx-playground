import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataViewComponent } from './data-view.component';
import { DataViewBasicComponent } from './01.basic/data-view-basic.component';
import { DataViewCustomButtonComponent } from './02.custombutton/data-view-custom-button.component';


export const routes: Routes = [
  {
    path: '', component: DataViewComponent,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', component: DataViewBasicComponent },
      { path: 'custom-button', component: DataViewCustomButtonComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataViewRoutingModule { }