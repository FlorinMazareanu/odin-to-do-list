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


