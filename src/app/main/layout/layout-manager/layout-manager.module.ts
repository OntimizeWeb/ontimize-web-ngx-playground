import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../../shared/shared.module';
import { LayoutManagerOverviewComponent } from './00.overview/layout-manager-overview.component';
import { LayoutManagerTabgroupComponent } from './01.tabgroup/layout-manager-tabgroup.component';
import { LayoutManagerDialogComponent } from './02.dialog/layout-manager-dialog.component';
import { LayoutManagerSplitPaneComponent } from './03.splitpane/layout-manager-split-pane.component';
import { CustomersDetailComponent } from './detail/customers-detail.component';
import { LayoutManagerRoutingModule } from './layout-manager-routing.module';
import { LayoutManagerComponent } from './layout-manager.component';
import { LayoutManagerSidenavComponent } from './04.sidenav/layout-manager-sidenav.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LayoutManagerRoutingModule
  ],
  declarations: [
    LayoutManagerComponent,
    LayoutManagerOverviewComponent,
    LayoutManagerTabgroupComponent,
    LayoutManagerDialogComponent,
    LayoutManagerSplitPaneComponent,
    LayoutManagerSidenavComponent,
    CustomersDetailComponent
  ]
})
export class LayoutManagerModule { }
