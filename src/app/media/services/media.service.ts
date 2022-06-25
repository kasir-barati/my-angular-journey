import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Media } from '../media.model';
import { environment } from 'src/environments/environment';

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
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl.concat('/medias');
  }

  add(media: Media): Observable<Media> {
    /**
     * check if it is already in the array? or server? It is obvious
     * It is server responsibility, Why? because server may updated data.
     */
    return this.httpClient.post<Media>(this.baseUrl, media).pipe(
      map((media) => {
        // TODO: Do required normalization
        return media;
      }),
    );
  }

  get(filters: Partial<Media> = {}): Observable<Media[]> {
    const illuminateNils = JSON.parse(JSON.stringify(filters));
    const params = new HttpParams({
      fromObject: illuminateNils,
    });

    return this.httpClient
      .get<Media[]>(this.baseUrl, {
        params,
      })
      .pipe(
        map((media) => {
          // TODO: Do required normalization
          return media;
        }),
      );
  }

  delete(id: number): Observable<Media> {
    return this.httpClient
      .delete<Media>(this.baseUrl.concat('/', String(id)))
      .pipe(
        map((media) => {
          // TODO: Do required normalization
          return media;
        }),
      );
  }

  update(id: number, media: Media): Observable<Media> {
    return this.httpClient
      .put<Media>(this.baseUrl.concat('/', String(id)), media)
      .pipe(
        map((media) => {
          // TODO: Do required normalization
          return media;
        }),
      );
  }
}
