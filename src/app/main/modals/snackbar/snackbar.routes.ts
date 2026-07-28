import { Routes } from '@angular/router';

export const SNACKBAR_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Snackbar' }, loadComponent: () => import('./snackbar.component').then(m => m.SnackBarComponent) }
];
