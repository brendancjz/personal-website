import { Component, HostListener, OnInit } from '@angular/core';

export interface IProject {
  name: string,
  date: string,
  oneLiner: string,
  description: string,
  techUsed: string[],
  image: string,
  action: string,
  actionLink: string,
  githubLink: string
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
    date: "May 2021",
    oneLiner: "Personal Finance Tracking Bot",
    description: "Bo Lui is a quirky Telegram Bot that tracks your " + 
                "personal spendings and earnings.\n\n It’s simplicity, " +
                "convenience and fun personality makes finance " + 
                "tracking more interactive and fun.",
    techUsed: ["Heroku CLI", "Java", "Maven", "PostgreSQL", "Telegram API"],
    image: "../../assets/images/project-image-bo-lui.png",
    action: "Try it out",
    actionLink: "https://www.t.me/bo_lui_bot/",
    githubLink: "https://github.com/brendancjz/boluibot"
  }

  website: IProject = {
    name: "My Website",
    date: "Dec 2021",
    oneLiner: "Personal Website",
    description: "I have always wanted a website with my own domain. " + 
                "There wasn't a template that I really liked and so, " +
                "I decided to develop my own website from scratch.\n\n " + 
                "This website is intended to showcase my projects, " + 
                "introduce myself and blog about interesting topics.",
    techUsed: ["Angular", "CSS", "HTML", "TypeScript"],
    image: "",
    action: "",
    actionLink: "",
    githubLink: "https://github.com/brendancjz/personal-website"
  }

  chiaCollection: IProject = {
    name: "The Chia Collection",
    date: "Nov 2018",
    oneLiner: "Clothing E-Commerce Platform",
    description: "Designed and sold more than 150 articles of clothing worldwide.\n\n" + 
                "I've always enjoyed doodling as a child. Stepping out of my comfort zone, " +
                "I took up this opportunity to start a business selling t-shirts and " +
                "hoodies with my own graphic designs.\n\n It's an honour to create something that " + 
                "resonates with someone and this journey has been a wild one.",
    techUsed: ["Adobe Illustrator", "Adobe Photoshop", "cPanel", "WooCommerce", "WordPress"],
    image: "../../assets/images/project-image-the-chia-collection.png",
    action: "Check it out",
    actionLink: "https://www.thechiacollection.com/",
    githubLink: ""
  }

  fintechSocietyNFT: IProject = {
    name: "NFT Minting and Viewing Website",
    date: "Jan 2022",
    oneLiner: "NUS Fintech Society NFT Website",
    description: "I joined NUS Fintech Society in August and finally, " + 
                "I have the opportunity to build a blockchain project! " + 
                "\n\nTasked as the Tech Lead, I led a group of 5 members to " + 
                "build NUS Fintech Society's first NFT Collection and Website. " +
                "\n\nDelegated and integrated 3 main tasks well, designing the NFT " + 
                "and metadata, building the smart contract and developing the frontend.",
    techUsed: ["Material UI", "React.js", "Web3"],
    image: "../../assets/images/project-image-nft.png",
    action: "",
    actionLink: "",
    githubLink: "https://github.com/brendancjz/nus-fintech-society-nft"
  }

  projects: IProject[] = [this.fintechSocietyNFT, this.website, this.boLui, this.chiaCollection];
}
