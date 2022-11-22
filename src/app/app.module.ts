import { Injector, NgModule } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { DummyService } from './shared/services/dummy.service';
import { CollapsibleStateService } from './shared/services/collapsible-state.service';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);


export function getDummyServiceProvider(injector: Injector) {
  return new DummyService(injector);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    OGalleryModule
  ],
  providers: [
    { provide: CollapsibleStateService },
    { provide: APP_CONFIG, useValue: CONFIG },
    {
      provide: 'DummyService',
      useFactory: getDummyServiceProvider,
      deps: [Injector]
    },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
