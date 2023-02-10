import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { OGalleryModule } from 'ontimize-web-ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { DummyService } from './shared/services/dummy.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OntimizeWebModule,
    AppRoutingModule,
    HighlightModule
    //OGalleryModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'DummyService', useValue: DummyService },
    ...ONTIMIZE_PROVIDERS,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        languages: getHighlightLanguages()
      }
    },

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
