import { OImageEditorModule } from 'ontimize-web-ngx-extra-components';
import { SharedModule } from './../../../shared/shared.module';
import { ImageEditorExamplesComponent } from './image-editor-examples/image-editor-examples.component';
import { ImageEditorMediaComponent } from './image-editor-media/image-editor-media.component';
import { ImageEditorRoutingModule } from './image-editor-routing.module';
import { ImageEditorComponent } from './image-editor.component';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ImageEditorRoutingModule,
    OImageEditorModule
  ],
  declarations: [
    ImageEditorComponent,
    ImageEditorMediaComponent,
    ImageEditorExamplesComponent
  ]
})
export class ImageEditorModule { }
