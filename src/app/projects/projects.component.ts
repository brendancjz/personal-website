import { Component, HostListener, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isSmallScreenSize: boolean = window.innerWidth <= 940;
  coinToss: number = Math.floor(Math.random() * 2) + 1;

  projects: Project[] | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.initialiseProjects();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreenSize = window.innerWidth <= 940;

  }

}
