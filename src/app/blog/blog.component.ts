import { Component, OnInit } from '@angular/core';

export interface IBlogParagraph {
  heading: string | null,
  text: string | null,
  image: string | null
}

export interface IBlog {
  title: string,
  date: string,
  noOfMinutesToRead: string,
  tldr: string | null,
  paragraphs: IBlogParagraph[],
  finalWord: IBlogParagraph | null
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createTeleBot: IBlog = {
    title: "How To: Create a Java Telegram Bot",
    date: "25 July 2021",
    noOfMinutesToRead: "8 minute read",
    tldr: "A guide in developing a Java Telegram Bot",
    paragraphs: [
      {
        heading: null,
        text: null,
        image: null
      }
    ],
    finalWord: null
  }

}
