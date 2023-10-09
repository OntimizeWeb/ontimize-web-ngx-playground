import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TooltipComponent } from './tooltip.component';

export const routes: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Tooltip' }, component: TooltipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule { }
