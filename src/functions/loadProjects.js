import { allProjectsElem } from "../domVariables";
import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadTasks } from "./loadTasks";
import { deleteProject } from "./deleteProject";
import { addProjectInLocalStorage } from "./addProjectInLocalStorage";
//this functions loads all the projects on the page
//under "tasks in project" on the page

function loadProjects() {
    //console.log("loading projects...");
    //console.log(allProjectsElem);

    //testing localStorage items
    //if they are projects, they are loaded
    //checkIfTaskOrProject is used to check if project
    Object.entries(localStorage).forEach((item) => {

        let rez = checkIfTaskOrProject(item);
        if (rez == "project") {

            //defining DOM elements
            let projectContainer = document.createElement("div");
            let project = document.createElement("h3");
            let projectDelete = document.createElement("i");

            //adding elements to DOM (except "selected-project" that I mentioned in index.js)
            if (JSON.parse(item[0]) != 1) {
                allProjectsElem.appendChild(projectContainer);
                projectContainer.appendChild(project);
            }
            
            //the default project "Not in project" can not be deleted
            if (JSON.parse(item[1]).id > 1) {
                projectContainer.appendChild(projectDelete);
            }

            //adding text to each project
            project.innerHTML = JSON.parse(item[1]).name;

            //adding classes and id's
            projectContainer.classList.add("project-container");
            project.id = `project-${JSON.parse(item[1]).id}`;
            projectDelete.id = `project-delete-${JSON.parse(item[1]).id}`
            projectDelete.classList.add("fa-solid");
            projectDelete.classList.add("fa-trash-can");
            projectDelete.classList.add("project-delete");
            project.classList.add("project-h3");

            //adding event listeners to each project
            project.addEventListener("pointerdown", () => {
                //setting up the selected project in the key of 1 of localStorage
                localStorage.setItem(1, item[1]);
                //will load tasks from this project
                loadTasks(1, JSON.parse(item[1]).name);              
            });

            //adding event listeners to the trash cans
            projectDelete.addEventListener("pointerdown", () => {
                deleteProject(item);
            });

        }
    });
}

export { loadProjects };