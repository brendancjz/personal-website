import { Component, OnInit } from '@angular/core';

//MyInfo Titles
export enum MyInfoTitles {
  ABOUT_ME, EDUCATION, WORK_EXPERIENCE, SKILLS
}

//This is for each content within an MyInfo. example - Accredify under Experience.
export interface IMyInfoContent {
  header: string | null,
  date: string | null,
  oneliner: string | null,
  content: string[]
}

//There will be multiple content within one MyInfo
export interface IMyInfo {
  title: string,
  content: IMyInfoContent[]
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  currentContent: MyInfoTitles = MyInfoTitles.ABOUT_ME;
  myInfoTitles = MyInfoTitles;

  constructor() { }

  ngOnInit(): void {
  }

  aboutMe: IMyInfo = {
    title: "About Me",
    content: [{
      header: null,
      date: null,
      oneliner: null,
      content: ["Hello! I’m a penultimate Information Systems major studying in " +
        "National University of Singapore. I’m an outgoing and optimistic " +
        "individual who always sees the glass half full.",

      "Currently, looking for opportunities to work with a company that " +
      "will bring my expertise up a notch and allow me to make an impact in " +
      "the industry.",

      "These days my time is spent on learning to be a better software engineer, " +
      "ideating and developing software projects and catching up with my friends.",

      "Out of work, you’ll find me playing computer games with my friends, binge " +
      "watching netflix shows or playing badminton."]
    }]
  }

  education: IMyInfo = {
    title: "Education",
    content: [{
      header: "National University of Singapore",
      date: "Aug 2020 - Jun 2024",
      oneliner: "Bachelor of Computing in Information Systems (Honours)",
      content: ["CCA: NUS FinTech Society — Blockchain Developer"]
    }, {
      header: "Temasek Junior College",
      date: "Jan 2016 - Dec 2017",
      oneliner: "GCE 'A' Levels - Physics, Chemistry, Math, Economics",
      content: ["CCA: Temasek Xcel Scholar, Badminton Captain for 'A' Division"]
    }, {
      header: "Victoria School",
      date: "Jan 2012 - Dec 2015",
      oneliner: "GCE 'O' Levels - Triple Science, Literature",
      content: ["CCA: Badminton Captain for 'B' and 'C' Division"]
    }]
  }

  workExp: IMyInfo = {
    title: "Work Experience",
    content: [{
      header: "GovTech",
      date: "May 2022 - Present",
      oneliner: "Full Stack Mobile Engineer",
      content: ["Developer for the LifeSG Mobile App."]
    }, {
      header: "NUS Teaching Assistant",
      date: "Aug 2021 - May 2022",
      oneliner: "Taught Students on Object-Orientated and Functional Programming",
      content: ["Guided a group of 25 students through weekly technical assignments " +
              "with emphasis on good coding practices to develop medium scale Java programs."]
    }, {
      header: "Accredify",
      date: "May 2021 - Aug 2021",
      oneliner: "Front-End Software Engineering Intern",
      content: ["Single handedly developed the User Interface for an email template builder and " +
                "a course program builder to allow clients to freely customise " +
                "certificate emails and courses intuitively from scratch.",
                "Built with HTML, CSS and JavaScript " +
                "while using Bootstrap and jQuery frameworks."]
    }]
  }

  skills: IMyInfo = {
    title: "Skills & Tech",
    content: [{
      header: "10,000+ Lines",
      date: null,
      oneliner: null,
      content: ["Java"]
    }, {
      header: "1,000+ Lines",
      date: null,
      oneliner: null,
      content: ["MySQL, HTML, CSS, TypeScript"]
    }, {
      header: "I'm familiar with",
      date: null,
      oneliner: null,
      content: ["Angular, BootStrap, Git, Jarkata EE, jQuery, PostgreSQL, Python, React"]
    }]
  }

  //Key - Value pair, to correct display which MyInfo Content.
  //NOTE: The result of Enum toString() == 'index of Enum'
  myInfo: {[key: string]: IMyInfo} = {
    0: this.aboutMe,
    1: this.education,
    2: this.workExp,
    3: this.skills
  }

  updateContentDiv(content: MyInfoTitles) {
    this.currentContent = content;
  }

}
