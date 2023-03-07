import { allTasksElem } from "../domVariables";
import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { generateTaskElements } from "./generateTaskElements";
import { removeTasks } from "./removeTasks";
//this function loads the tasks on the screen
//depending on parameters, it can load all of just from a project

function loadTasks(check, project) {
    //if check is 0, all tasks from all projects are loaded
    //if it's 1, only one project will load it's tasks
    //console.log(allTasksElem);

    if (check == 0) {

        //removing the tasks from the page
        removeTasks();

        //looping through localStorage to fish for tasks
        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);
            if (rez == "task") {
                //generating task elements and loading them on the page
                generateTaskElements(item);
            }
        });
    }
    else {

        //removing the tasks from the page
        removeTasks();

        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);

            //condition to only show from the selected project
            if (rez == "task" && JSON.parse(item[1]).inProject == project) {
                //generating task elements and loading them on the page
                generateTaskElements(item);
            }
        });
    }
}

export { loadTasks };