import { SharedModule } from './../../../shared/shared.module';
import { ImageComponent } from './image.component';
import { NgModule } from '@angular/core';
import { OImageModule, OntimizeWebModule } from 'ontimize-web-ngx';

import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImageMediaComponent } from './image-media/image-media.component';
import { MediaRoutingModule } from './image-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MediaRoutingModule,
    OImageModule
  ],
  declarations: [
    ImageComponent,
    ImageMediaComponent,
    ImageExamplesComponent
  ]
})
export class ImageModule { }
