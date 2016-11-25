import { NgModule }      from '@angular/core';

import {
  ONTIMIZE_MODULES,
  ONTIMIZE_DIRECTIVES,
  ontimizeProviders } from 'ontimize-web-ng2/ontimize';

import { CONFIG } from './app.config';
import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { APP_DIRECTIVES } from './app.directives';
import { NavigationBarService } from './shared/navigation-bar.service';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

// Standard providers...
let standardProviders = ontimizeProviders({
  'config': CONFIG
});
// Defining custom providers (if needed)...
let customProviders = [
    NavigationBarService
];

@NgModule({
  imports: [ ONTIMIZE_MODULES, routing, HighlightJsModule],
  declarations: [
    AppComponent,
    ONTIMIZE_DIRECTIVES,
    ...APP_DIRECTIVES
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...standardProviders,
    HighlightJsService,
    ...customProviders
  ]
})
export class AppModule { }

