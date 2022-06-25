export interface Media {
  id?: number;
  name: string;
  // Comes from server. probably
  medium: string;
  // Comes from server. probably
  category: string;
  year: string;
  watchedOn: string;
  isFavorite: boolean;
}
