import { NgModule } from '@angular/core';

import { NavigationBarService } from './navigation-bar.service';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import {
  OntimizeWebModule
} from 'ontimize-web-ngx';

@NgModule({
  imports: [
    OntimizeWebModule,
    HighlightJsModule
  ],
  declarations: [
    ExampleComponent,
    HighlightComponent
  ],
  exports: [
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent
  ],
  providers: [
    HighlightJsService,
    NavigationBarService
  ]
})
export class SharedModule { }
