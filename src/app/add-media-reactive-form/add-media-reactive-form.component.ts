import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      year: new FormControl(),
      isFavorite: new FormControl(),
      watchedOn: new FormControl(),
    });
  }

  onSubmitAddMedia(media: Media) {
    console.log(media.name);
    console.log(this.addMediaForm.value.isFavorite);
  }
}
