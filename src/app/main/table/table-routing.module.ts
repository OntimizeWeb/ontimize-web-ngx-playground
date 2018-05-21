import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';
import { TableBasicComponent } from './01.basic/table-basic.component';
import { TableFixedComponent } from './02.fixed/table-fixed.component';
import { TableRendererComponent } from './03.rederer/table-renderer.component';
import { TableCustomRendererComponent } from './04.customrenderer/table-custom-renderer.component';
import { TableEditorComponent } from './05.editor/table-editor.component';
import { TableTotalComponent } from './06.total/table-total.component';
import { TableCalculatedColumnComponent } from './07.calculatedcolumn/table-calculated-column.component';
import { TablePaginationComponent } from './08.pagination/table-pagination.component';
import { TableContextMenuComponent } from './09.contextmenu/table-context-menu.component';

export const routes: Routes = [
  {
    path: '', component: TableComponent, children: [
      { path: '', component: TableBasicComponent },
      { path: 'fixed', component: TableFixedComponent },
      { path: 'render', component: TableRendererComponent },
      { path: 'custrender', component: TableCustomRendererComponent },
      { path: 'editor', component: TableEditorComponent },
      { path: 'total', component: TableTotalComponent },
      { path: 'calculatedcolumn', component: TableCalculatedColumnComponent },
      { path: 'pagination', component: TablePaginationComponent },
      { path: 'contextmenu', component: TableContextMenuComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
