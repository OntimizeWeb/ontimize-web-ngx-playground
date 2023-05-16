import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryMediaComponent } from './gallery-media/gallery-media.component';
import { GalleryExampleComponent } from './gallery-example/gallery-example.component';;
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    GalleryRoutingModule,
    //OGalleryModule
  ],
  declarations: [
    GalleryComponent,
    GalleryMediaComponent,
    GalleryExampleComponent
  ]
})
export class GalleryModule { }
