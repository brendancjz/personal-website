import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn : 'root',
})
export class ProjectService {
  constructor() {
  }

  initialiseProjects() {
    const boLui = new Project();
    boLui.name = "Bo Lui Bot";
    boLui.date = "May 2021";
    boLui.oneLiner = "Personal Finance Tracking Bot";
    boLui.description = "Bo Lui is a quirky Telegram Bot that tracks your " +
                  "personal spendings and earnings.\n\n It's simplicity, " +
                  "convenience and fun personality makes finance " +
                  "tracking more interactive and fun.";
    boLui.techUsed = ["Heroku CLI", "Java", "Maven", "PostgreSQL", "Telegram API"];
    boLui.image = "../../assets/images/project-image-bo-lui.jpg";
    boLui.action = "Try it out";
    boLui.actionLink = "https://www.t.me/bo_lui_bot/";
    boLui.githubLink = "https://github.com/brendancjz/boluibot";


    const website = new Project();
    website.name = "My Website";
    website.date = "Dec 2021";
    website.oneLiner = "Personal Website";
    website.description = "I have always wanted a website with my own domain. " +
                  "There wasn't a template that I really liked and so, " +
                  "I decided to develop my own website from scratch.\n\n " +
                  "This website is intended to showcase my projects, " +
                  "introduce myself and blog about interesting topics.";
    website.techUsed = ["Angular", "CSS", "HTML", "TypeScript"];
    website.image = "";
    website.action = "";
    website.actionLink = "";
    website.githubLink = "https://github.com/brendancjz/personal-website";

    const chiaCollection = new Project();
    chiaCollection.name = "The Chia Collection";
    chiaCollection.date = "Nov 2018";
    chiaCollection.oneLiner = "Clothing E-Commerce Platform";
    chiaCollection.description = "Designed and sold more than 150 articles of clothing worldwide.\n\n" +
                "I've always enjoyed doodling as a child. Stepping out of my comfort zone, " +
                "I took up this opportunity to start a business selling t-shirts and " +
                "hoodies with my own graphic designs.\n\n It's an honour to create something that " +
                "resonates with someone and this journey has been a wild one.";
    chiaCollection.techUsed = ["Adobe Illustrator", "Adobe Photoshop", "cPanel", "WooCommerce", "WordPress"];
    chiaCollection.image = "../../assets/images/project-image-the-chia-collection.jpg";
    chiaCollection.action = "Check it out";
    chiaCollection.actionLink = "https://www.thechiacollection.com/";
    chiaCollection.githubLink = "";


    const fintechSocietyNFT = new Project();
    fintechSocietyNFT.name = "NFT Minting and Viewing Website";
    fintechSocietyNFT.date = "Jan 2022";
    fintechSocietyNFT.oneLiner = "NUS Fintech Society NFT Website",
    fintechSocietyNFT.description = "I joined NUS Fintech Society in August and finally, " +
                "I have the opportunity to build a blockchain project! " +
                "\n\nTasked as the Project Lead, I led a group of 5 members to " +
                "build NUS Fintech Society's first NFT Collection and Website. " +
                "\n\nDelegated and integrated 3 main tasks well, designing the NFT " +
                "and metadata, building the smart contract and developing the frontend.";
    fintechSocietyNFT.techUsed = ["Material UI", "React.js", "Web3"];
    fintechSocietyNFT.image = "../../assets/images/project-image-nft.jpg";
    fintechSocietyNFT.action = "";
    fintechSocietyNFT.actionLink = "";
    fintechSocietyNFT.githubLink = "https://github.com/brendancjz/nus-fintech-society-nft";

    const tompang = new Project();
    tompang.name = "Tompang";
    tompang.date = "Apr 2022";
    tompang.oneLiner = "Mobile App: A Marketplace for Singaporean Travelers";
    tompang.description = "Travelers can offer to buy back overseas products for interested " +
          "buyers in Singapore, allowing travelers to earn extra income while they are on their " +
          "trip. \n\nOn the flip side, Tompang offers Singaporeans the opportunity to either purchase " +
          "products from overseas without bearing expensive shipping costs or purchase products that " +
          "they would not have been able to purchase directly from Singapore.\n\n" +
          "Tompang is an Ionic mobile application with an administrative JarkataEE web application, " +
          "both leveraging on Glassfish. This project is completed within a semester under the module IS3106: Enterprise Systems Interface Design and Development.";
    tompang.techUsed = ["CSS", "Glassfish", "HTML", "Ionic", "Jarkata EE", "Java", "Java Server Faces", "TypeScript"];
    tompang.image = "../../assets/images/project-image-tompang.jpg";
    tompang.action = "Demo Video";
    tompang.actionLink = "https://youtu.be/r3e0ZtRd6tQ";
    tompang.githubLink = "https://github.com/brendancjz/tompang";

    return [tompang, fintechSocietyNFT, website, boLui, chiaCollection];
  }
}
