/**
 * Root module:
 * - Access the starting point module for Angular application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediasComponent } from './medias/medias.component';
import { FavoriteDirective } from './media/directive/favorite.directive';
import { CategoryListPipe } from './medias/pipes/category-list.pipe';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddMediaReactiveFormComponent } from './add-media-reactive-form/add-media-reactive-form.component';

/**
 * imports: Usually things that our app needs to perform as it intended
 *   - BrowserModule: Work with DOM and some common most used directives
 * declarations:
 *   - Usually contains a list of our Angular app components
 *   - App growth and we cannot keep them together in one component
 *   - Increase ease of maintainability
 * bootstrap: Usually AppComponent
 */
@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediasComponent,
    FavoriteDirective,
    CategoryListPipe,
    AddMediaComponent,
    AddMediaReactiveFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  /**
   * Load component on the first match, unlike what we have in nested modules.
   * In other word we cannot have multiple <app-root></app-root>
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
