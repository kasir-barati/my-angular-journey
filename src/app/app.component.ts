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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-journey';
}
