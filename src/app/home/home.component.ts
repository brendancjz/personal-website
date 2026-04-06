import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Brendan';
  /** Bump when adding more `profile-photo-N.jpg` + `.webp` under `src/assets/images/`. */
  numOfImages = 1;
  randomNumberSelected = Math.floor(Math.random() * this.numOfImages + 1);
  webpSource = `/assets/images/profile-photo-${this.randomNumberSelected}.webp`;
  jpgSource = `/assets/images/profile-photo-${this.randomNumberSelected}.jpg`;

  constructor() { }

  ngOnInit(): void {

  }

}
