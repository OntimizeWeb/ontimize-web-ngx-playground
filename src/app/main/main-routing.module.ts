import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
      { path: 'containers', loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule) },
      { path: 'contextmenu', loadChildren: () => import('./contextmenu/context-menu.module').then(m => m.ContextMenuModule) },
      { path: 'dialogs', loadChildren: () => import('./dialogs/dialogs.module').then(m => m.DialogsModule) },
      { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'inputs', loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule) },
      { path: 'lists', loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule) },
      { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
      { path: 'snackbar', loadChildren: () => import('./snackbar/snackbar.module').then(m => m.SnackBarModule) },
      { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
