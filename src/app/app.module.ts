import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { CollapsibleStateService } from './shared/services/collapsible-state.service';
import { ConfigCollapsibleStateService } from './shared/services/config-collapsible-state.service';
import { DummyService } from './shared/services/dummy.service';

/**
 * Import specific languages to avoid importing everything
 */
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
    HighlightModule,
    OGalleryModule
  ],
  providers: [
    { provide: CollapsibleStateService, useValue: undefined },
    { provide: ConfigCollapsibleStateService, useValue: undefined },
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'DummyService', useValue: DummyService },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
