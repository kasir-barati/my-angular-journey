/**
 * Contains bootstrapping our Angular app
 * Entry point of our codebase AFAIK
 *
 * Angular deemed to provide support to run on different platforms:
 * - Browser
 * - web worker
 * - server
 *
 * Because our app should be run on a browser we do need platformBrowserDynamic function.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  // Expect the root module
  .bootstrapModule(AppModule)
  // IDK why just logging. should not we kill the app?
  .catch((err) => console.error(err));
