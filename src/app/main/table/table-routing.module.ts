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

export const routes: Routes = [
  {
    path: '', component: TableComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'prefix' },
      { path: 'basic', component: TableBasicComponent },
      { path: 'fixed', component: TableFixedComponent },
      { path: 'renderer', component: TableRendererComponent },
      { path: 'custrenderer', component: TableCustomRendererComponent },
      { path: 'editor', component: TableEditorComponent },
      { path: 'total', component: TableTotalComponent },
      { path: 'calculatedcolumn', component: TableCalculatedColumnComponent },
      { path: 'pagination', component: TablePaginationComponent },
      { path: 'contextmenu', component: TableContextMenuComponent },
      { path: 'horizontalscroll', component: TableHorizontalScrollComponent },
      { path: 'insertablerow', component: TableInsertableRowComponent },
      { path: 'align', component: TableAlignmentComponent },
      { path: 'multipleSort', component: TableMultipleSortComponent },
      { path: 'rowexpandable', component: TableRowExpandableComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
