// import { GalleryModule } from './gallery/gallery.module';
import { ImageModule } from './image/image.module';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { MediaHomeComponent } from './media-home/media-home.component';
import { MediaRoutingModule } from './media-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MediaRoutingModule,
    ImageModule,
    // GalleryModule
  ],
  declarations: [
    MediaHomeComponent
  ]
})
export class MediaModule { }
