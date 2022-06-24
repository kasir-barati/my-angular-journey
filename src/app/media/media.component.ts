/**
 * We need to introduce this component to our AppComponent's declarations by listing
 * MediaComponent in that array
 */

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

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
  /**
   * Notify the Parent component by triggering an event.
   *
   * Here I also like to follow #angular_convention for naming events. I use
   * verb appended by a noun usually.
   *
   * You can initialize it:
   *   - Inline
   *   - Inside the constructor - My preference
   * But initializing in ngOnInit - ngOnInit(){this.deleteMedia = new EventEmitter<number>()} -
   * doesn't work because Angular subscribes to the event emitter before ngOnInit is called.
   * And it can't subscribe to it if it doesn't exist.
   *
   * IDK why but
   * We can use aliasing too - @Output('aliasName') - but it is recommended to avoid it.
   */
  @Output()
  deleteMedia: EventEmitter<number>;

  constructor() {
    this.deleteMedia = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  /**
   * You can see my mind transformation over naming #my_convention.
   */
  onClickDeleteMedia(id: number) {
    /**
     * We can specify a data to pass a data or we can leave it
     */
    this.deleteMedia.emit(id);
  }
}
