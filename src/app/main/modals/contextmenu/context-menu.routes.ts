import { Routes } from '@angular/router';

export const CONTEXT_MENU_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Context menu' }, loadComponent: () => import('./context-menu.component').then(m => m.ContextMenuComponent) }
];
