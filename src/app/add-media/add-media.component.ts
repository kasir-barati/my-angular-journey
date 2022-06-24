import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css'],
})
export class AddMediaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  osSubmitMedia(a: any) {
    debugger;
    console.log(a);
  }
}
