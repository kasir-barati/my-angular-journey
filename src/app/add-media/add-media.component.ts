import { Component, Inject, OnInit } from '@angular/core';

import { Media } from '../media/media.model';
import { MediaService } from '../media/services/media.service';
import { LookupList } from '../lookup-list.model';
import { lookupListToken } from '../value-providers';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css'],
})
export class AddMediaComponent implements OnInit {
  constructor(
    private mediaService: MediaService,
    /**
     * We need LookupList interface here.
     * We can use a variable instead of string:
     *   - @Inject(lookupListToken) public lookupList: LookupList,
     *   - @Inject('lookupListToken') public lookupList: LookupList,
     */
    @Inject(lookupListToken) public lookupList: LookupList,
  ) {}

  ngOnInit(): void {}

  osSubmitMedia(media: Media) {
    this.mediaService.add(media);
  }
}
