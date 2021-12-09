import { Component, HostListener, OnInit } from '@angular/core';

export interface IProject {
  name: string,
  oneLiner: string,
  description: string,
  techUsed: string[],
  image: string,
  action: string,
  actionLink: string
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isSmallScreenSize: boolean = window.innerWidth <= 940;
  coinToss: number = Math.floor(Math.random() * 2) + 1;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreenSize = window.innerWidth <= 940;

  }

  boLui: IProject = {
    name: "Bo Lui Bot",
    oneLiner: "Personal Finance Tracking Bot",
    description: "Bo Lui is a quirky Telegram Bot that tracks your " + 
                "personal spendings and earnings. It’s simplicity, " +
                "convenience and fun personality makes finance " + 
                "tracking more interactive and fun.",
    techUsed: ["Java", "PostgreSQL", "Telegram API", "Heroku CLI"],
    image: "../../assets/images/project-image-bo-lui.png",
    action: "Try it out",
    actionLink: "https://t.me/bo_lui_bot"
  }

  website: IProject = {
    name: "My Website",
    oneLiner: "Personal Website",
    description: "I have always wanted a website with my own domain. " + 
                "There wasn't a template that I really liked and so, " +
                "I decided to develop my own website from scratch. " + 
                "This website is intended to showcase my projects, " + 
                "introduce myself and blog about interesting topics.",
    techUsed: ["Angular", "TypeScript", "HTML", "CSS"],
    image: "",
    action: "",
    actionLink: ""
  }

  projects: IProject[] = [this.boLui, this.website];
}
