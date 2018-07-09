import { NgModule } from '@angular/core';
import { OImageModule, OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImageComponent } from './image-media/image.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';



@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MediaRoutingModule,
    OImageModule
  ],
  declarations: [
    MediaComponent,
    ImageComponent,
    ImageExamplesComponent
  ]
})
export class MediaModule { }
