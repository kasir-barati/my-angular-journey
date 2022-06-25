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

  constructor(private mediaService: MediaService) {
    this.medias = [];
  }

  ngOnInit(): void {
    this.mediaService.get().subscribe({
      next: (medias) => (this.medias = medias),
      error: (error) => (this.medias = []),
      complete: () => console.log('Medias fetched.'),
    });
  }

  /**
   * #my_convention
   * Learn more in media.component.html in anchor tag
   */
  onDeleteMedia(id: number) {
    this.mediaService.delete(id);
  }
}
