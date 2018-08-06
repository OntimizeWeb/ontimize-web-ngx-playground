import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { OTableColumnRendererCardTypeComponent } from './renderer/o-table-column-renderer-cardtype.component';
import { OTableColumnRendererBalanceComponent } from './renderer/o-table-column-renderer-balance.component';
import { OTableColumnRendererTotalReadyComponent } from './renderer/o-table-column-renderer-totalready.component';
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
import { OTableCellEditorCustomComponent } from './edit/o-table-cell-editor-custom.component';
import { TableTitleAlignComponent } from './12.titleAlign/table-title-align.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TableRoutingModule
  ],
  declarations: [
    TableComponent,
    TableBasicComponent,
    TableFixedComponent,
    TableRendererComponent,
    TableCustomRendererComponent,
    TableEditorComponent,
    TableTotalComponent,
    TableCalculatedColumnComponent,
    TablePaginationComponent,
    TableContextMenuComponent,
    OTableColumnRendererCardTypeComponent,
    OTableColumnRendererBalanceComponent,
    OTableColumnRendererTotalReadyComponent,
    TableHorizontalScrollComponent,
    TableInsertableRowComponent,
    OTableCellEditorCustomComponent,
    TableTitleAlignComponent
  ]
})
export class TableModule { }
