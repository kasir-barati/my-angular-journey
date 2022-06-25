import { Component, OnInit } from '@angular/core';

import { Media } from '../media/media.model';
import { MediaService } from '../media/services/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css'],
})
export class MediasComponent implements OnInit {
  medias: Media[];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.medias = this.mediaService.get();
  }

  /**
   * #my_convention
   * Learn more in media.component.html in anchor tag
   */
  onDeleteMedia(id: number) {
    this.mediaService.delete(id);
  }
}
