export interface Media {
  id?: number;
  name: string;
  // Comes from server. probably
  medium: string;
  // Comes from server. probably
  category: string | null;
  year: string | null;
  watchedOn: string | null;
  isFavorite: boolean | null;
}
