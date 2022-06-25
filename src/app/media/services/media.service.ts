import { Injectable } from '@angular/core';

import { Media } from '../media.model';

/**
 * The providedIn: 'root' command Angular to register it in the bootstrapping application
 *
 * Here we have two advantages:
 * 1. This service is injectable everywhere without any need to be listed in the providers.
 * 2. Angular can discard unused services in Build process.
 *    - It comes in lazy loading
 */
@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private medias: Media[];

  constructor() {
    this.medias = [
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
  }

  private genId(): number {
    return Math.ceil(Math.random() * 1000000);
  }

  add(media: Media): void {
    /**
     * check if it is already in the array? or server? It is obvious
     * It is server responsibility, Why? because server may updated data.
     */
    this.medias.push({ ...media, id: this.genId() });
  }

  get(): Media[] {
    return this.medias;
  }

  delete(id: number): void {
    this.medias = this.medias.filter((media) => media.id === id);
  }

  update(id: number, media: Media): void {
    /**
     * I doubt this is a good way to do it.
     */
    for (let index = 0; index < this.medias.length; index++) {
      if (this.medias[index].id === id) {
        const { id: ignoreId, ...rest } = this.medias[index];

        this.medias[index] = {
          ...this.medias[index],
          ...rest,
        };
        break;
      }
    }
  }
}
