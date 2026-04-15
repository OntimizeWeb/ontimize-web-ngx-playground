import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'buttons', loadChildren: () => import('./buttons/buttons.routes').then(m => m.BUTTONS_ROUTES) },
      { path: 'data', loadChildren: () => import('./data/data.routes').then(m => m.DATA_ROUTES) },
      { path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES) },
      { path: 'inputs', loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule) },
      { path: 'media', loadChildren: () => import('./media/media.routes').then(m => m.MEDIA_ROUTES) },
      { path: 'modals', loadChildren: () => import('./modals/modals.routes').then(m => m.MODALS_ROUTES) },
      { path: 'layout', loadChildren: () => import('./layout/layout.routes').then(m => m.LAYOUT_ROUTES) },
      { path: 'about', loadChildren: () => import('./about/about.routes').then(m => m.ABOUT_ROUTES) }
    ]
  }
];
