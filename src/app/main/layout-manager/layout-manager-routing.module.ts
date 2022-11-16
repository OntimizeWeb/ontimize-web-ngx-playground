import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutManagerOverviewComponent } from './00.overview/layout-manager-overview.component';
import { LayoutManagerTabgroupComponent } from './01.tabgroup/layout-manager-tabgroup.component';
import { LayoutManagerDialogComponent } from './02.dialog/layout-manager-dialog.component';
import { LayoutManagerSplitPaneComponent } from './03.splitpane/layout-manager-split-pane.component';
import { CustomersDetailComponent } from './detail/customers-detail.component';
import { LayoutManagerComponent } from './layout-manager.component';

export const routes: Routes = [
  {
    path: '', component: LayoutManagerComponent, children: [
      { path: '', redirectTo: 'tab', pathMatch: 'full' },
      { path: 'tab', data: { oAppHeaderTitle: 'Layouts' }, component: LayoutManagerTabgroupComponent, 
      children: [{ path: ':OTHERID/:CUSTOMERID', component: CustomersDetailComponent }] },
      { path: 'dialog', data: { oAppHeaderTitle: 'Layouts' }, component: LayoutManagerDialogComponent, children: [{ path: ':CUSTOMERID', component: CustomersDetailComponent }] },
      { path: 'split-pane', data: { oAppHeaderTitle: 'Layouts' }, component: LayoutManagerSplitPaneComponent, children: [{ path: ':CUSTOMERID', component: CustomersDetailComponent }] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutManagerRoutingModule { }
