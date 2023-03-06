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
import { addTaskInLocalStorage } from "./functions/addTaskInLocalStorage";
import { openAddItemDialog } from "./functions/openAddItemDialog";
import { closeAddItemDialog } from "./functions/closeAddItemDialog"; 

//creating a new Task
let newTask = createTaskObject(1, "fa curat", "treci la treaba", "azi", "curatenie", "nu");
console.log(newTask);

//inserting in localStorage
addTaskInLocalStorage(newTask.id, newTask);

console.log(addItemElem);

//event listeners for DOM elements

//event listener for the "+" button 
//to open the add task/project dialog
addItemElem.addEventListener("pointerdown", () => {
    openAddItemDialog(addItemDialogElem);
});

//event listener to the X button to close the "add item" dialog
addItemDialogCloseElem.addEventListener("pointerdown", () =>{
    closeAddItemDialog(addItemDialogElem)
});

//event listener for the "New task" option in the "add item" dialog
//when clicking on "New task", a form wil generate
addTaskElem.addEventListener("pointerdown", () =>{
    generateAddTaskForm(modalContentFormElem)
});

//event listener for the "New project" option in the "add item" dialog
//when clicking on "New project", a form wil generate
addProjectElem.addEventListener("pointerdown", () =>{
    generateAddProjectForm(modalContentFormElem)
});


