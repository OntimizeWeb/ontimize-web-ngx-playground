import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { ontimizeProviders } from 'ontimize-web-ng2';

import { NavigationBarService } from './shared/navigation-bar.service';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { MAIN_MODULES } from './main';

const standardProviders = ontimizeProviders({
  config: CONFIG
});

// Defining custom providers (if needed)
const customProviders = [
  HighlightJsService,
  NavigationBarService
];

import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    LoginModule,
    MAIN_MODULES,
    AppRoutingModule,
    HighlightJsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...standardProviders,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
