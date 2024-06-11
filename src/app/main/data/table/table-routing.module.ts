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
import { PivotTableComponent } from './16.pivotTable/pivot-table.component';

export const routes: Routes = [
  {
    path: '', component: TableComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', data: { oAppHeaderTitle: 'Table' }, component: TableBasicComponent },
      { path: 'fixed', data: { oAppHeaderTitle: 'Table' }, component: TableFixedComponent },
      { path: 'renderer', data: { oAppHeaderTitle: 'Table' }, component: TableRendererComponent },
      { path: 'custrenderer', data: { oAppHeaderTitle: 'Table' }, component: TableCustomRendererComponent },
      { path: 'editor', data: { oAppHeaderTitle: 'Table' }, component: TableEditorComponent },
      { path: 'total', data: { oAppHeaderTitle: 'Table' }, component: TableTotalComponent },
      { path: 'calculatedcolumn', data: { oAppHeaderTitle: 'Table' }, component: TableCalculatedColumnComponent },
      { path: 'pagination', data: { oAppHeaderTitle: 'Table' }, component: TablePaginationComponent },
      { path: 'contextmenu', data: { oAppHeaderTitle: 'Table' }, component: TableContextMenuComponent },
      { path: 'horizontalscroll', data: { oAppHeaderTitle: 'Table' }, component: TableHorizontalScrollComponent },
      { path: 'insertablerow', data: { oAppHeaderTitle: 'Table' }, component: TableInsertableRowComponent },
      { path: 'align', data: { oAppHeaderTitle: 'Table' }, component: TableAlignmentComponent },
      { path: 'multipleSort', data: { oAppHeaderTitle: 'Table' }, component: TableMultipleSortComponent },
      { path: 'rowexpandable', data: { oAppHeaderTitle: 'Table' }, component: TableRowExpandableComponent },
      { path: 'rowgroup', data: { oAppHeaderTitle: 'Table' }, component: TableRowGroupComponent },
      { path: 'pivottable', data: { oAppHeaderTitle: 'Table' }, component: PivotTableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
