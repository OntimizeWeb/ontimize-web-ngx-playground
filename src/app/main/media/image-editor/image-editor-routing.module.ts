import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageEditorComponent } from './image-editor.component';
import { ImageEditorMediaComponent } from './image-editor-media/image-editor-media.component';
import { ImageEditorExamplesComponent } from './image-editor-examples/image-editor-examples.component';


export const routes: Routes = [
  {
    path: '', component: ImageEditorComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', data: { oAppHeaderTitle: 'Image Editor' }, component: ImageEditorMediaComponent },
      { path: 'examples', data: { oAppHeaderTitle: 'Image Editor' }, component: ImageEditorExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageEditorRoutingModule { }
