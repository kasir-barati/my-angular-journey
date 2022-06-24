/**
 * This component is the main component
 * - That title property is just for demonstration IMO.
 * - styleUrls is a private css file for the AppComponent,
 *   Note that this css file is not a place to put your
 *   global css, for that use style.css
 */

import { Component } from '@angular/core';

@Component({
  // We have a <app-root></app-root> in the index.html
  selector: 'app-root',
  /**
   * Use inline markup with template
   * Or use external template with relative path. Build process handles this relative path
   */
  templateUrl: './app.component.html',
  /**
   * - You can use inline css via using style option which is an array of string
   *   Or we can specify its css file which are relative path to this file.
   * - Angular also does scheming. What is scheming?
   * - Creates custom attributes without any value and use them in the auto generated final
   *   css to scope those css to that specific component. kinda related stackoverflow Q&A:
   *   https://stackoverflow.com/questions/24932391
   */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * We will send this property to the media component
   */
  mediaItem = {
    id: 1,
    name: 'My Angular Journey',
    medium: 'Series',
    category: 'Anime',
    year: '2022',
    watchedOn: '1994',
    isFavorite: true,
  };
}
