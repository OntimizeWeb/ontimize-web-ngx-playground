import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImageComponent } from './image-media/image.component';
import { MediaComponent } from './media.component';

export const routes: Routes = [
  {
    path: '', component: MediaComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', data: { oAppHeaderTitle: 'Image component playground' }, component: ImageComponent },
      { path: 'examples', data: { oAppHeaderTitle: 'Image component examples' }, component: ImageExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
