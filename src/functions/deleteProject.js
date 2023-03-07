import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadProjects } from "./loadProjects";
import { allProjectsElem } from "../domVariables";

//this function delets a project
function deleteProject(item) {

    let type = checkIfTaskOrProject(item);

    if (type == "project") {
        localStorage.removeItem(JSON.parse(item[1]).id);
        //removed all projects from the page
        allProjectsElem.innerHTML = "";
        //reload the projects
        loadProjects(); 
    }
}

export { deleteProject };