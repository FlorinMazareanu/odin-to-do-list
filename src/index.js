//importing DOM variables
import 
{ 
    addItemElem,
    addItemDialogElem,
    addItemDialogCloseElem,
    addTaskElem,
    addProjectElem,
    modalContentFormElem,
    homeElem
} 
from "./domVariables";

//importing functions
import { createTaskObject } from "./functions/createTaskObject";
import { createProjectObject } from "./functions/createProjectObject";
import { addTaskInLocalStorage } from "./functions/addTaskInLocalStorage";
import { addProjectInLocalStorage } from "./functions/addProjectInLocalStorage";
import { openAddItemDialog } from "./functions/openAddItemDialog";
import { closeAddItemDialog } from "./functions/closeAddItemDialog"; 
import { removeAddItemForms } from "./functions/removeAddItemForms";
import { generateNewTaskForm } from "./functions/generateNewTaskForm";
import { generateNewProjectForm } from "./functions/generateNewProjectForm";
import { loadTasks } from "./functions/loadTasks";
import { loadProjects } from "./functions/loadProjects";
import { checkIfTaskOrProject } from "./functions/checkIfTaskOrProject";

//creating a new project called "Not in a project"
let newProject = createProjectObject(0, "Not in a project");

//inserting the default "Not in a project" data into localStorage
addProjectInLocalStorage(newProject.id, newProject);

//creating a new project called "selected-project"
//it's purpose is tracking the selected project
//used to load only some tasks after delete
//and not all of them
let selectedProject = createProjectObject(1, "selected-project");

//inserting the default "selected-project" data into localStorage
addProjectInLocalStorage(selectedProject.id, selectedProject);

//hardcoding some projects and tasks to load the page up a bit
//feel free to add/remove tasks and projects
let projectOne = createProjectObject(2, "House chores");
let projectTwo = createProjectObject(3, "Work assignments");
addProjectInLocalStorage(projectOne.id, projectOne);
addProjectInLocalStorage(projectTwo.id, projectTwo);
/*
let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);
//let taskOne = createTaskObject(id, title, description, dueDate, inProject, isDone);
let taskOne = createTaskObject(4, "Walk the dog", "He deserves a treat also", currentDate, "House chores", "no");
let taskTwo = createTaskObject(5, "Clean the room", "Almost done. I'll mark this complete", currentDate, "House chores", "yes");
let taskThree = createTaskObject(6, "Wash the car", "There's a great car wash place nearby", currentDate, "House chores", "no");
let taskFour = createTaskObject(7, "Finish that presentation", "Well, time to work on that", currentDate, "Work assignment", "no");
let taskFive = createTaskObject(8, "Fix that bug", "Fixed it. I caused it, I fixed it.", currentDate, "Work assignment", "yes");
addTaskInLocalStorage(4, taskOne);
addTaskInLocalStorage(5, taskTwo);
addTaskInLocalStorage(6, taskThree);
addTaskInLocalStorage(7, taskFour) ;
addTaskInLocalStorage(8, taskFive);
*/

//loading all tasks from all projects:
loadTasks(0);

//loading the project list
loadProjects();

//event listeners for the DOM elements

//event listener for the "Home" button (labled "All tasks")
//it loads all the tasks, regardless of project
//just like when the page is refreshed
homeElem.addEventListener("pointerdown", () => {
    loadTasks(0);
    //will also set "selected-project" to default, deselecting the selected project
    localStorage.setItem(1, JSON.stringify(selectedProject));
});

//event listener for the "+" button 
//to open the add task/project dialog
addItemElem.addEventListener("pointerdown", () => {
    openAddItemDialog(addItemDialogElem);
});

//event listener to the X button to close the "add item" dialog
addItemDialogCloseElem.addEventListener("pointerdown", () =>{
    closeAddItemDialog(addItemDialogElem); 
});

//event listener for the "New task" option in the "add item" dialog
//when clicking on "New task", the form will be removed
//then, a form will generate
addTaskElem.addEventListener("pointerdown", () =>{
    removeAddItemForms(modalContentFormElem);
    generateNewTaskForm(modalContentFormElem);
});

//event listener for the "New project" option in the "add item" dialog
//when clicking on "New project", the form will be removed
//then, a form will generate
addProjectElem.addEventListener("pointerdown", () =>{
    removeAddItemForms(modalContentFormElem);
    generateNewProjectForm(modalContentFormElem);
});

//other event listeners will be added inside other pages, as they are for elements that are not yet generated
//(like tasks/projects that are not yet added by the user)


