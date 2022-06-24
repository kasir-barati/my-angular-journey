/**
 * Root module:
 * - Access the starting point module for Angular application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * imports: Usually things that our app needs to perform as it intended
 *   - BrowserModule: Work with DOM and some common most used directives
 * declarations: Usually contains a list of our Angular app components
 * bootstrap: Usually AppComponent
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  /**
   * Load component on the first match, unlike what we have in nested modules.
   * In other word we cannot have multiple <app-root></app-root>
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
