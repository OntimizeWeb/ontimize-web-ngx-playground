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
