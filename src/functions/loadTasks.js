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

    //looking in the key of 1 in localStorage
    if (localStorage.getItem(1) != `{"id":1,"name":"selected-project"}`) {
        //console.log("a project is selected in loadTasks");
    }

    if (check == 0) {

        //removing the tasks from the page
        removeTasks();

        //console.log("all tasks will be loaded...");
        //looping through localStorage to fish for tasks
        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);
            if (rez == "task") {
                //console.log("incarca tot:");
                //console.log(item);

                //generating task elements and loading them on the page
                generateTaskElements(item);
            }
        });
    }
    else {

        //removing the tasks from the page
        removeTasks();

        //console.log("only tasks from the project will be loaded...");
        //console.log(project);
        //looping through localStorage to fish for tasks
        //console.log("looping...");
        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);

            //condition to only show from the selected project
            if (rez == "task" && JSON.parse(item[1]).inProject == project) {
                //console.log("item:");
                //console.log(item);

                //generating task elements and loading them on the page
                generateTaskElements(item);
            }
        });
    }
}

export { loadTasks };