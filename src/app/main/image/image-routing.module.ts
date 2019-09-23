import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImagePlaygroundComponent } from './image-media/image.component';
import { ImageComponent } from './image.component';



export const routes: Routes = [
  {
    path: '', component: ImageComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', component: ImagePlaygroundComponent },
      { path: 'examples', component: ImageExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
