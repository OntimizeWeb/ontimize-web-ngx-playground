import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.MAIN_ROUTES) },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
