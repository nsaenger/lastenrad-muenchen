import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
})
export class PressComponent implements OnInit {

  public photos: string[] = [];
  private photoStr: string = 'https://lastenrad-muenchen.de/core/img/photos/0';

  constructor() {
    for (let i = 1; i <= 8; i++) {
      this.photos.push(this.photoStr + i + '.jpg');
    }
  }

  ngOnInit() {
  }

}
