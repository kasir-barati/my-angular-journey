import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Media } from '../media/media.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb(): { medias: Media[] } {
    return {
      // Resource Name
      medias: [
        {
          id: 1,
          name: 'M 1',
          medium: 'Movies',
          category: 'Anime',
          year: '2022',
          watchedOn: '1994',
          isFavorite: true,
        },
        {
          id: 2,
          name: 'S 1',
          medium: 'Series',
          category: 'Sci-Fi',
          year: '2022',
          watchedOn: '1994',
          isFavorite: true,
        },
        {
          id: 3,
          name: 'M 2',
          medium: 'Movies',
          category: 'Sci',
          year: '2022',
          watchedOn: '1994',
          isFavorite: true,
        },
        {
          id: 4,
          name: 'S 2',
          medium: 'Series',
          category: 'Anime',
          year: '2022',
          watchedOn: '1994',
          isFavorite: false,
        },
      ],
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the medias array is empty,
  // the method below returns the initial number (11).
  // if the medias array is not empty, the method below returns the highest
  // hero id + 1.
  genId(medias: Media[]): number {
    return medias.length > 0
      ? Math.max(...medias.map((media) => media.id!)) + 1
      : 11;
  }
}
