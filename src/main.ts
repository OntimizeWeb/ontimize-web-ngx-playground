import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  O_TABLE_GLOBAL_CONFIG,
  ontimizePostBootstrap,
  provideOntimizeWeb
} from 'ontimize-web-ngx';
import {
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from 'ngx-highlightjs';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CONFIG } from './app/app.config';
import { DummyService } from './app/shared/services/dummy.service';
import { PacksService } from './app/shared/services/packs.service';
import { RickAndMortyRequestArgumentsAdapter } from './app/shared/services/rickandmortyapi/rickandmorty-request-adapter';
import { RickAndMortyResponseAdapter } from './app/shared/services/rickandmortyapi/rickandmorty-response.adapter';
import { RickAndMortyService } from './app/shared/services/rickandmortyapi/rickandmorty.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideOntimizeWeb(CONFIG),
    provideRouter(routes),
    { provide: 'DummyService', useValue: DummyService },
    { provide: 'packs', useValue: PacksService },
    { provide: 'rickandmorty', useValue: RickAndMortyService },
    {
      provide: O_TABLE_GLOBAL_CONFIG,
      useValue: {
        showChartsOnDemandOption: false,
        showReportOnDemandOption: false,
      },
    },
    RickAndMortyResponseAdapter,
    RickAndMortyRequestArgumentsAdapter,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ]
}).then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});
