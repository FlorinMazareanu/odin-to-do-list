import { allTasksElem } from "../domVariables";
//this function removes existing tasks on the page
//in order to make room for newly-generated tasks
function removeTasks() {
    allTasksElem.innerHTML = "";
}

export { removeTasks };