import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
      { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'inputs', loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule) },
      { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
      { path: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule) },
      { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
