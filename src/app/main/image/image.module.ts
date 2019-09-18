import { NgModule } from '@angular/core';
import { OImageModule, OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ImageExamplesComponent } from './image-examples/image-examples.component';
import { ImagePlaygroundComponent } from './image-media/image.component';
import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';




@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ImageRoutingModule,
    OImageModule
  ],
  declarations: [
    ImageComponent,
    ImagePlaygroundComponent,
    ImageExamplesComponent
  ]
})
export class ImageModule { }
