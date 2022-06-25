import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-media-reactive-form',
  templateUrl: './add-media-reactive-form.component.html',
  styleUrls: ['./add-media-reactive-form.component.css'],
})
export class AddMediaReactiveFormComponent implements OnInit {
  addMediaForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addMediaForm = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmitAddMedia(media: any) {
    console.log(media);
  }
}
