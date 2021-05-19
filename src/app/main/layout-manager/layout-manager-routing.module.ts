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
      { path: '', component: LayoutManagerOverviewComponent },
      { path: 'tab', component: LayoutManagerTabgroupComponent, children: [{ path: ':CUSTOMERID', component: CustomersDetailComponent }] },
      { path: 'dialog', component: LayoutManagerDialogComponent, children: [{ path: ':CUSTOMERID', component: CustomersDetailComponent }] },
      { path: 'split-pane', component: LayoutManagerSplitPaneComponent, children: [{ path: ':CUSTOMERID', component: CustomersDetailComponent }] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutManagerRoutingModule { }
