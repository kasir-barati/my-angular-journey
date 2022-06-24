import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css'],
})
export class MediasComponent implements OnInit {
  medias = [
    {
      id: 1,
      name: 'My Angular Journey',
      medium: 'Series',
      category: 'Asian',
      year: '2022',
      watchedOn: '1994',
      isFavorite: true,
    },
    {
      id: 2,
      name: 'My Angular Journey',
      medium: 'Series',
      category: 'Sci-Fi',
      year: '2022',
      watchedOn: '1994',
      isFavorite: true,
    },
    {
      id: 3,
      name: 'My Angular Journey',
      medium: 'Series',
      category: 'Sci',
      year: '2022',
      watchedOn: '1994',
      isFavorite: true,
    },
    {
      id: 4,
      name: 'My Angular Journey',
      medium: 'Series',
      category: 'Anime',
      year: '2022',
      watchedOn: '1994',
      isFavorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  /**
   * #my_convention
   * Learn more in media.component.html in anchor tag
   */
  onDeleteMedia(id: number) {
    console.log(id);
  }
}
