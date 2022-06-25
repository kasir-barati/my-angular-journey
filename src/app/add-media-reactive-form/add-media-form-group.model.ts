import { AbstractControl, FormGroup } from '@angular/forms';

import { Media } from '../media/media.model';

export interface AddMediaFormGroup extends FormGroup {
  value: Media;

  /**
   * We need to add these manually again, same fields as Media
   * Why? Because it will suggest you based on these part, but
   * the 'value: Media' is not useless. It validates based on too
   * You can go to the Media interface and remove the optional
   * identifier from it. it will yells at you that id is missed.
   */
  controls: {
    name: AbstractControl;
    medium: AbstractControl;
    category: AbstractControl;
    year: AbstractControl;
    watchedOn: AbstractControl;
    isFavorite: AbstractControl;
  };
}
