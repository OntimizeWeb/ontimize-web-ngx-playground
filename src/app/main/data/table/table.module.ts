import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { DummyService } from 'src/app/shared/services/dummy.service';

import { SharedModule } from '../../../shared/shared.module';
import { TableBasicComponent } from './01.basic/table-basic.component';
import { TableFixedComponent } from './02.fixed/table-fixed.component';
import { TableRendererComponent } from './03.renderer/table-renderer.component';
import { TableCustomRendererComponent } from './04.customrenderer/table-custom-renderer.component';
import { TableEditorComponent } from './05.editor/table-editor.component';
import { TableTotalComponent } from './06.total/table-total.component';
import { TableCalculatedColumnComponent } from './07.calculatedcolumn/table-calculated-column.component';
import { TablePaginationComponent } from './08.pagination/table-pagination.component';
import { TableContextMenuComponent } from './09.contextmenu/table-context-menu.component';
import { TableHorizontalScrollComponent } from './10.horizontalscroll/table-horizontal-scroll.component';
import { TableInsertableRowComponent } from './11.insertablerow/table-insertable-row.component';
import { TableAlignmentComponent } from './12.alignment/table-alignment.component';
import { TableMultipleSortComponent } from './13.multipleSort/table-multiple-sort.component';
import { TableRowExpandableBasicComponent } from './14.expandableRow/basic/table-row-expandable-basic.component';
import { TableRowExpandableWithContainerComponent } from './14.expandableRow/expandable-container/table-row-expandable-with-expandable-container.component';
import { TableRowExpandableFunctionAsyncComponent } from './14.expandableRow/expandable-function-async/table-row-expandable-function-async.component';
import { TableRowExpandableFunctionSyncComponent } from './14.expandableRow/expandable-function-sync/table-row-expandable-function-sync.component';
import { TableRowExpandableMultipleComponent } from './14.expandableRow/multiple/table-row-expandable-multiple.component';
import { TableRowExpandableComponent } from './14.expandableRow/table-row-expandable.component';
import { TableRowExpandableWithoutButtonComponent } from './14.expandableRow/without-button/table-row-expandable-without-button.component';
import { TableRowGroupComponent } from './15.rowGrouping/table-row-group.component';
import { OTableColumnRendererBalanceComponent } from './renderer/o-table-column-renderer-balance.component';
import { OTableColumnRendererCardTypeComponent } from './renderer/o-table-column-renderer-cardtype.component';
import { OTableColumnRendererTotalReadyComponent } from './renderer/o-table-column-renderer-totalready.component';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TableRoutingModule,
    MatButtonModule,
    OChartModule
  ],
  declarations: [
    TableComponent,
    TableBasicComponent,
    TableFixedComponent,
    TableRendererComponent,
    OTableColumnRendererCardTypeComponent,
    OTableColumnRendererBalanceComponent,
    OTableColumnRendererTotalReadyComponent,
    TableCustomRendererComponent,
    TableEditorComponent,
    TableTotalComponent,
    TableCalculatedColumnComponent,
    TablePaginationComponent,
    TableContextMenuComponent,
    TableHorizontalScrollComponent,
    TableInsertableRowComponent,
    TableAlignmentComponent,
    TableMultipleSortComponent,
    TableRowExpandableBasicComponent,
    TableRowExpandableFunctionSyncComponent,
    TableRowExpandableFunctionAsyncComponent,
    TableRowExpandableWithoutButtonComponent,
    TableRowExpandableWithContainerComponent,
    TableRowExpandableComponent,
    TableRowExpandableMultipleComponent,
    TableRowGroupComponent
  ],
  providers: [DummyService],
})
export class TableModule { }
