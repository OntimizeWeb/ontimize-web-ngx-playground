import { SharedModule } from './../../../shared/shared.module';
import { ImageEditorMediaComponent } from './image-editor-media/image-editor-media.component';
import { ImageEditorRoutingModule } from './image-editor-routing.module';
import { ImageEditorComponent } from './image-editor.component';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ImageEditorRoutingModule
  ],
  declarations: [
    ImageEditorComponent,
    ImageEditorMediaComponent
  ]
})
export class ImageEditorModule { }
