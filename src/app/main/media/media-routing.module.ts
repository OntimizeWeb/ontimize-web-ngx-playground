import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';
import { ImageComponent } from './image-media/image.component';
import { ImageExamplesComponent } from './image-examples/image-examples.component';

export const routes: Routes = [
  {
    path: '', component: MediaComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', component: ImageComponent },
      { path: 'examples', component: ImageExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
