import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
      { path: 'containers', loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule) },
      { path: 'contextmenu', loadChildren: () => import('./contextmenu/context-menu.module').then(m => m.ContextMenuModule) },
      { path: 'dialogs', loadChildren: () => import('./dialogs/dialogs.module').then(m => m.DialogsModule) },
      { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'inputs', loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule) },
      { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
      { path: 'snackbar', loadChildren: () => import('./snackbar/snackbar.module').then(m => m.SnackBarModule) },
      { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) },
      { path: 'image', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
      { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'layout-manager', loadChildren: () => import('./layout-manager/layout-manager.module').then(m => m.LayoutManagerModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
