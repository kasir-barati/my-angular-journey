import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

import { AddMediaFormGroup } from './add-media-form-group.model';
import { Media } from '../media/media.model';

@Component({
  selector: 'app-add-media-reactive-form',
  templateUrl: './add-media-reactive-form.component.html',
  styleUrls: ['./add-media-reactive-form.component.css'],
})
export class AddMediaReactiveFormComponent implements OnInit {
  addMediaForm: FormGroup<AddMediaFormGroup>;

  constructor() {}

  ngOnInit(): void {
    this.addMediaForm = new FormGroup<AddMediaFormGroup>({
      medium: new FormControl('Movies', { nonNullable: true }),
      name: new FormControl('', { nonNullable: true }),
      category: new FormControl(),
      year: new FormControl('', [this.yearValidator]),
      isFavorite: new FormControl(),
      watchedOn: new FormControl(),
    });
  }

  yearValidator(
    control: AbstractControl<string | null>,
  ): ValidationErrors | null {
    /**
     * No need to validate it. It is assumed that we accept empty string as a valid value
     * or we have done the Validators.require already
     */
    if (!control.value) {
      return null;
    }
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = Number(control.value.trim());

    if (Number.isFinite(year)) {
      return null;
    }

    return { year: true };
  }

  onSubmitAddMedia(media: Media) {
    console.log(media.name);
    console.log(this.addMediaForm.value.isFavorite);
  }
}
