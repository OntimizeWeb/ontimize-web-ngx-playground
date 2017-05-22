import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CONFIG } from './app/app.config';

import { environment } from './environments/environment';
import {
  ontimizePostBootstrap,
  ontimizeBootstrap
} from 'ontimize-web-ng2';

// if (environment.production) {
  enableProdMode();
// }

// const promise = ontimizeBootstrap(AppModule, CONFIG);
// promise.then(appRef => {
//   console.log('initialized... ');
// });

// // HACK: horrible workaround for AoT bootstrap detection bug
// const hackThis = false;
// if (hackThis) {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// }

const promise = platformBrowserDynamic().bootstrapModule(AppModule);
promise.then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});
