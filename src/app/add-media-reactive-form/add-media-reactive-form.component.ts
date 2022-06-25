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
  addMediaForm: AddMediaFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addMediaForm = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl(''),
      isFavorite: new FormControl(true),
      watchedOn: new FormControl(''),
    }) as AddMediaFormGroup;
  }

  onSubmitAddMedia(media: Media) {
    console.log(media);
    console.log(this.addMediaForm.value.isFavorite);
  }
}
