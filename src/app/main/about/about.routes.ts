import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'About page' }, loadComponent: () => import('./about.component').then(m => m.AboutComponent) }
];
