//importing DOM variables
import 
{ 
    addItemElem,
    addItemDialogElem,
    addItemDialogCloseElem,
    addTaskElem,
    addProjectElem,
    modalContentFormElem
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

//creating a new project called "Not in a project"
let newProject = createProjectObject(0, "Not in a project");
console.log(newProject);

//inserting the default "Not in a project" data into localStorage
addProjectInLocalStorage(newProject.id, newProject);

console.log(addItemElem);

//event listeners for the DOM elements

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


