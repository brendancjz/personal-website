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
    chiaCollection.action = "We're Closed";
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
    fintechSocietyNFT.action = "Demo Video";
    fintechSocietyNFT.actionLink = "https://youtu.be/T_GE9wWe1v4";
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

    const bestbudsbot = new Project();
    bestbudsbot.name = "Best Buds Bot";
    bestbudsbot.date = "June 2022";
    bestbudsbot.oneLiner = "Birthday Tracking Bot for Telegram Groups";
    bestbudsbot.description = "It is a hassle to discreetly collate birthday messages for a friend in a group. " +
          "You will need to private message everyone else in the group. \n\n" +
          "BestBudsBot helps to automate this process, ensuring everyone's birthday in the group is accounted for. " +
          "Now, the birthday IC will not be left out too!";
    bestbudsbot.techUsed = ["Heroku CLI", "Java", "Maven", "PostgreSQL", "Telegram API"];
    bestbudsbot.image = "../../assets/images/project-image-bestbuds-bot.jpg";
    bestbudsbot.action = "Try it out";
    bestbudsbot.actionLink = "https://t.me/bbb_bestbuds_bot";
    bestbudsbot.githubLink = "https://github.com/brendancjz/bestbuds-bot";

    const splitEase = new Project();
    splitEase.name = "SplitEase";
    splitEase.date = "April 2023";
    splitEase.oneLiner = "SplitEase helps to split the gathering's bill with ease";
    splitEase.description = "During my semester-long Student Exchange Program in the UK, my friends and I had trouble " +
          "splitting the bill for our shared dinners. \n\nInterested in developing the most efficient " +
          "algorithm to help split our bills equally. Within the week of 22 April 2023, SplitEase was born!";
    splitEase.techUsed = ["Angular", "CSS", "HTML", "TypeScript"];
    splitEase.action = "Try it out";
    splitEase.actionLink = "https://splitease.brendanchia.com";
    splitEase.image = "../../assets/images/project-image-splitease.jpg";
    splitEase.githubLink = "https://github.com/brendancjz/splitease";


    return [splitEase, bestbudsbot, tompang, fintechSocietyNFT, website, boLui, chiaCollection];
  }
}
