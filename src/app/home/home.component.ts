import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string = 'Brendan';
  numOfImages: number = 3;
  randomNumberSelected = Math.floor(Math.random() * this.numOfImages + 1);
  imageSource:string = '../../assets/images/profile-photo-' + this.randomNumberSelected + '.png';

  constructor() { }

  ngOnInit(): void {
    
  }

}
