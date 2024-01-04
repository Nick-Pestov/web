import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "TEMPO - Playlist Generating App", pictures: "../../assets/tempo-2.jpg", projectLink: "//github.com/Nick-Pestov/Spotify-Playlist-Generating-App", summary: "Spotify Playlist Generator App", description: "Note: This is not the actual UI of the app*. The app was built entirely using Java, and the purpose of the project was to test functionality. The app successfully generates Spotify tracks based on some user filters, and also finds existing Spotify playlists related to an input track. Unfortunately, an Auth Token is required to use the application, so unless you have one generated, the app will be inaccessible. If you would like a demo please let me know. For more info, see the link.", tags: [Tag.JAVA]},
    {id: 1, name: "Terminal AI Competition", pictures: "../../assets/python-algo.png", projectLink: "//github.com/Nick-Pestov/Top-25-Global-Leaderboard-AI-Algorithm", summary: "AI Algorithm Strategy Competition ", description: "I built an algorithm using Python which was rated 22nd highest in the world and 1st in Canada at its peak rating out of 66000 algorithms. Unfortunately, due to some technical issues, I was unable to compete in the summer tournament, however my algorithm was higher rated at the time than all the competing ones. Since August 2023, the algorithm has consistently been rated top 150 in the world, even though the last update was in August. Once a competition opens, I will finalize a prototype I have developed. ", tags: [Tag.PYTHON]},
    {id: 2, name: "Andromeda Social Media App", pictures: "../../assets/image.png", projectLink: "//github.com/Nick-Pestov/SocialMediaIdea/tree/main/Andromeda-Nicks-Profile-Work/Andromeda-Nicks-Profile-Work", summary: "Social Media Prototype Specific to Events", description: "Andromeda was a prototype of a social media app dedicated to events. The purpose of it was to inform users of upcoming events whether it open to the public or their friend-group, and for the app to highlight the event's best moments. We designed the front-end which was capable of messaging, adding friends, and creating events with their respective locations.   ", tags: [Tag.FLUTTER ,Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 3, name: "This Website!", pictures: "", projectLink: "//www.github.com", summary: "Temporary Personal Website Developed for Learning Angular", description: "I plan on making a different website in the future. This was a personal project just exploring the Angular framework and refreshing my front-end skills. In the future I hope to create more animations and a cleaner website", tags: [Tag.ANGULAR, Tag.NODEJS, Tag.TYPESCRIPT, Tag.JAVASCRIPT]},
    {id: 4, name: "Chess Tree Visualizer", pictures: "../../assets/chess-python.png", projectLink: "//github.com/Nick-Pestov/ChessTreeMapVisualizer", summary: "Chess Move Visualizer and all the resulting positions following a certain move order (Master Games)", description: "The project basically visualized all the different continuations following some specific order of moves, which ends up on a Node (one of the rectangles) until a game finishes. The following picture uses 500 master games gathered from Lichess.com. ", tags: [Tag.PYTHON]},
  ];
  constructor() { }

  GetProject() {
    return this.projects;
  }

  GetProjectByID(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError("No project with " + id + " exists"); 
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTags){
        if (project.tags.includes(filterTags) == false){
          foundAll = false;
        }
      })
      if(foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
