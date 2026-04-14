import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HIGHLIGHT_OPTIONS,
  HighlightModule,
  HighlightOptions,
} from "ngx-highlightjs";
import {
  APP_CONFIG,
  O_TABLE_GLOBAL_CONFIG,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
} from "ontimize-web-ngx";
import { OGalleryModule } from "ontimize-web-ngx-gallery";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CONFIG } from "./app.config";
import { DummyService } from "./shared/services/dummy.service";
import { PacksService } from "./shared/services/packs.service";
import { RickAndMortyRequestArgumentsAdapter } from "./shared/services/rickandmortyapi/rickandmorty-request-adapter";
import { RickAndMortyResponseAdapter } from "./shared/services/rickandmortyapi/rickandmorty-response.adapter";
import { RickAndMortyService } from "./shared/services/rickandmortyapi/rickandmorty.service";

/**
 * Import specific languages to avoid importing everything
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import("highlight.js/lib/languages/typescript"),
    css: () => import("highlight.js/lib/languages/css"),
    xml: () => import("highlight.js/lib/languages/xml"),
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OntimizeWebModule,
    AppRoutingModule,
    HighlightModule,
    OGalleryModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: "DummyService", useValue: DummyService },
    { provide: "packs", useValue: PacksService },
    { provide: "rickandmorty", useValue: RickAndMortyService },
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
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        lineNumbersLoader: () => import("highlightjs-line-numbers.js"),
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
          css: () => import("highlight.js/lib/languages/css"),
          xml: () => import("highlight.js/lib/languages/xml"),
        },
      },
    },
    ...ONTIMIZE_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
