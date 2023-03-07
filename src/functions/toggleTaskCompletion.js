import { createTaskObject } from "./createTaskObject";
import { addTaskInLocalStorage } from "./addTaskInLocalStorage";

function toggleTaskCompletion(item, checkboxStatus) {
    console.log(item);
    console.log(JSON.parse(item[1]).id);
    let newTask = ""
    let id = JSON.parse(item[1]).id;
    let title = JSON.parse(item[1]).title;
    let description = JSON.parse(item[1]).description;
    let dueDate = JSON.parse(item[1]).dueDate;
    let inProject = JSON.parse(item[1]).inProject;
    let isDone = "";
    if (checkboxStatus == "checked") {
        isDone = "yes";
    }
    else {
        isDone = "no"
    }
    
    //creating a new task object with same props except isDone
    let task = createTaskObject(id, title, description, dueDate, inProject, isDone);

    //adding into localStorage
    addTaskInLocalStorage(id, task);
    //localStorage.setItem(id, JSON.stringify(task));
}

export { toggleTaskCompletion };