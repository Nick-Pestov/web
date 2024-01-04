import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  typescript: boolean = false;
  angular: boolean = false;
  flutter: boolean = false;
  java: boolean = false;
  javaScript: boolean = false;
  nodejs: boolean = false;
  python: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Nick Pestov - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetProject();
  }

  Filter(){
    let filterTags: Tag[] = [];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT); 
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.flutter){
      filterTags.push(Tag.FLUTTER);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.javaScript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if (this.typescript || this.angular || this.flutter || this.java || this.javaScript || this.nodejs || this.python || this.python) {
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.flutter = false;
    this.java = false;
    this.javaScript = false;
    this.nodejs = false;
    this.python = false;
    this.filtering = false;
    this.projects = this.projectsService.GetProject();
  }
}