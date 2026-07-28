import { Routes } from '@angular/router';

export const TOOLTIP_ROUTES: Routes = [
  { path: '', data: { oAppHeaderTitle: 'Tooltip' }, loadComponent: () => import('./tooltip.component').then(m => m.TooltipComponent) }
];
