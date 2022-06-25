import { FormControl } from '@angular/forms';

export interface AddMediaFormGroup {
  name: FormControl<string>;
  medium: FormControl<string>;
  category: FormControl<string | null>;
  year: FormControl<string | null>;
  watchedOn: FormControl<string | null>;
  isFavorite: FormControl<boolean | null>;
}
