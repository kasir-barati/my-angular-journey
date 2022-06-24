/**
 * We need to introduce this component to our AppComponent's declarations by listing
 * MediaComponent in that array
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  /**
   * Now Angular knows that when we do instantiation from this component which
   * we done it in app.component.html - <app-media></app-media> - we wanna support
   * property binding for media property.
   *
   * FIXME: Do not use any as much as you can. For now bear with me, later on we will typify it.
   *
   * IDK why TBH
   * We can also specify an alias for this property. For example: @Input('mediaItem')
   * BTW we are encouraged to avoid this renaming and use the same name.
   */
  @Input()
  media: any;

  constructor() {}

  ngOnInit(): void {}

  onClickDelete() {
    console.log('Media delete called');
  }
}
