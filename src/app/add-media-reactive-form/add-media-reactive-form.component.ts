import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  FormBuilder,
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

  /**
   * Here we are relying on constructor injection
   */
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /**
     * The benefit of this.formBuilder is that we do not need to do those instantiation
     * However we could also be more relaxed in normal scenario with medium: ['Movies']
     * instead of medium: this.formBuilder.control('Movies', { ...
     *
     * IDK why I cannot use it right now.
     */
    this.addMediaForm = this.formBuilder.group<AddMediaFormGroup>({
      medium: this.formBuilder.control('Movies', {
        nonNullable: true,
      }),
      name: this.formBuilder.control('', { nonNullable: true }),
      category: this.formBuilder.control(null),
      year: this.formBuilder.control('', [this.yearValidator]),
      isFavorite: this.formBuilder.control(null),
      watchedOn: this.formBuilder.control(null),
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
