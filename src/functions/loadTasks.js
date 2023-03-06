import { allTasksElem } from "../domVariables";
//this function loads the tasks on the screen
//depending on parameters, it can load all of just from a project

function loadTasks(check, project) {
    //if check is 0, all tasks from all projects are loaded
    //if it's 1, only one project will load it's tasks
    //console.log(allTasksElem);
    if (check == 0) {
        //console.log("all tasks will be loaded...");
    }
    else {
        console.log("only tasks from the project will be loaded...");
        console.log(project);
    }
}

export { loadTasks };