import { Routes } from '@angular/router';

export const BUTTONS_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Buttons' }, loadComponent: () => import('./buttons.component').then(m => m.ButtonsComponent) }
];
