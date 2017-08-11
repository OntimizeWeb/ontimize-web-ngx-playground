import { NgModule } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
} from 'ontimize-web-ng2';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

// import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';


// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
  // HighlightJsService
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    MainModule,
    AppRoutingModule
    // ,
    // HighlightJsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
})
export class AppModule { }

