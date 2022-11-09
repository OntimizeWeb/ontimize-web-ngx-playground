import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';
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
import { TableRowExpandableComponent } from './14.expandableRow/table-row-expandable.component';
import { TableRowGroupComponent } from './15.rowGrouping/table-row-group.component';

export const routes: Routes = [
  {
    path: '', component: TableComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', data: { oAppHeaderTitle: 'Basic table' }, component: TableBasicComponent },
      { path: 'fixed', data: { oAppHeaderTitle: 'Fixed header or footer table' }, component: TableFixedComponent },
      { path: 'renderer', data: { oAppHeaderTitle: 'Renderer table' }, component: TableRendererComponent },
      { path: 'custrenderer', data: { oAppHeaderTitle: 'Custom renderer table' }, component: TableCustomRendererComponent },
      { path: 'editor', data: { oAppHeaderTitle: 'Table editor' }, component: TableEditorComponent },
      { path: 'total', data: { oAppHeaderTitle: 'Table totals' }, component: TableTotalComponent },
      { path: 'calculatedcolumn', data: { oAppHeaderTitle: 'Calculated column table' }, component: TableCalculatedColumnComponent },
      { path: 'pagination', data: { oAppHeaderTitle: 'Table pagination' }, component: TablePaginationComponent },
      { path: 'contextmenu', data: { oAppHeaderTitle: 'Table context menu' }, component: TableContextMenuComponent },
      { path: 'horizontalscroll', data: { oAppHeaderTitle: 'Horizontal scroll table' }, component: TableHorizontalScrollComponent },
      { path: 'insertablerow', data: { oAppHeaderTitle: 'Insertable row table' }, component: TableInsertableRowComponent },
      { path: 'align', data: { oAppHeaderTitle: 'Column align table' }, component: TableAlignmentComponent },
      { path: 'multipleSort', data: { oAppHeaderTitle: 'Multiple sort table' }, component: TableMultipleSortComponent },
      { path: 'rowexpandable', data: { oAppHeaderTitle: 'Row expandable table' }, component: TableRowExpandableComponent },
      { path: 'rowgroup', data: { oAppHeaderTitle: 'Row grouping table' }, component: TableRowGroupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
