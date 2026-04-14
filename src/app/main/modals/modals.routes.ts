import { Routes } from '@angular/router';

export const MODALS_ROUTES: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Modals' }, loadComponent: () => import('./modals-home/modals-home.component').then(m => m.ModalsHomeComponent) },
  { path: 'contextmenu', loadChildren: () => import('./contextmenu/context-menu.routes').then(m => m.CONTEXT_MENU_ROUTES) },
  { path: 'dialogs', loadChildren: () => import('./dialogs/dialogs.routes').then(m => m.DIALOGS_ROUTES) },
  { path: 'snackbar', loadChildren: () => import('./snackbar/snackbar.routes').then(m => m.SNACKBAR_ROUTES) },
  { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.routes').then(m => m.TOOLTIP_ROUTES) }
];
