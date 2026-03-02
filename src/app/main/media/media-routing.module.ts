import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaHomeComponent } from './media-home/media-home.component';

export const routes: Routes = [
  { path: 'home', data: { oAppHeaderTitle: 'Media' }, component: MediaHomeComponent },
  { path: 'image', loadChildren: () => import('./image/image.module').then(m => m.ImageModule) },
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'editor-image', loadChildren: () => import('./image-editor/image-editor.module').then(m => m.ImageEditorModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
