import { NgModule } from '@angular/core';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { DummyService } from './shared/services/dummy.service';
import { CollapsibleStateService } from './shared/services/collapsible-state.service';
import { ConfigCollapsibleStateService } from './shared/services/config-collapsible-state.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';

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
    HighlightModule,
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    OGalleryModule
  ],
  providers: [
    { provide: CollapsibleStateService },
    { provide: ConfigCollapsibleStateService },
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'DummyService', useValue: DummyService },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
