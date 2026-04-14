import { Routes } from '@angular/router';

export const DIALOGS_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Dialog' }, loadComponent: () => import('./dialogs.component').then(m => m.DialogsComponent) }
];
