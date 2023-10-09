import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalsHomeComponent } from './modals-home/modals-home.component';

export const routes: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Modals' }, component: ModalsHomeComponent },
  { path: 'contextmenu', loadChildren: () => import('./contextmenu/context-menu.module').then(m => m.ContextMenuModule) },
  { path: 'dialogs', loadChildren: () => import('./dialogs/dialogs.module').then(m => m.DialogsModule) },
  { path: 'snackbar', loadChildren: () => import('./snackbar/snackbar.module').then(m => m.SnackBarModule) },
  { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
