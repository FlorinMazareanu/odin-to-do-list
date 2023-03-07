import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadProjects } from "./loadProjects";
import { allProjectsElem } from "../domVariables";

//this function delets a project
function deleteProject(item) {
    //checkIfTaskOrProject(item);

    let type = checkIfTaskOrProject(item);
    //console.log(type);
    //console.log(JSON.parse(item[1]).id);
    if (type == "project") {
        localStorage.removeItem(JSON.parse(item[1]).id);
        //removed all projects from the page
        allProjectsElem.innerHTML = "";
    //reload the projects
        loadProjects(); 
    }
}

export { deleteProject };