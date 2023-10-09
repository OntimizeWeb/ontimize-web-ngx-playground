import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImageMediaComponent } from './image-media/image-media.component';
import { ImageComponent } from './image.component';

export const routes: Routes = [
  {
    path: '', component: ImageComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', data: { oAppHeaderTitle: 'Image' }, component: ImageMediaComponent },
      { path: 'examples', data: { oAppHeaderTitle: 'Image' }, component: ImageExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
