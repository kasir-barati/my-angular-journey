/**
 * We need to introduce this component to our AppComponent's declarations by listing
 * MediaComponent in that array
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
