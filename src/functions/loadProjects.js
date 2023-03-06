import { allProjectsElem } from "../domVariables";
import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadTasks } from "./loadTasks";
//this functions oloads all the projects on the page
//under "tasks in project" on the page

function loadProjects() {
    //console.log("loading projects...");
    //console.log(allProjectsElem);

    //

    //testing localStorage items
    //if they are projects, they are loaded
    //checkIfTaskOrProject is used to check if project
    Object.entries(localStorage).forEach((item) => {
        let rez = checkIfTaskOrProject(item);
        if (rez == "project") {

            //defining DOM elements
            let projectContainer = document.createElement("div");
            let project = document.createElement("h3");

            //adding elements to DOM
            allProjectsElem.appendChild(projectContainer);
            projectContainer.appendChild(project);

            //adding text to each project
            project.innerHTML = JSON.parse(item[1]).name;

            //adding classes and id's
            project.id = `project-${JSON.parse(item[1]).id}`;

            //adding event listeners to each project
            project.addEventListener("pointerdown", () => {
                //will load tasks from this project
                loadTasks(1, JSON.parse(item[1]).name);
            });

        }
    });
}

export { loadProjects };