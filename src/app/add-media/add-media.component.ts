import { Component, OnInit } from '@angular/core';
import { Media } from '../media/media.model';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css'],
})
export class AddMediaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  osSubmitMedia(media: Media) {
    debugger;
    console.log(media);
  }
}
