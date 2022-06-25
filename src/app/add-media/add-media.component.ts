import { Component, OnInit } from '@angular/core';

import { Media } from '../media/media.model';
import { MediaService } from '../media/services/media.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css'],
})
export class AddMediaComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {}

  osSubmitMedia(media: Media) {
    this.mediaService.add(media);
  }
}
