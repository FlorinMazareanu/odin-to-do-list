//plus sign to add tasks and projects
let addItemElem = document.getElementById("planning-add-button");

//dialog that's opened by the "+" sign
let addItemDialogElem = document.getElementById("add-dialog-open");

//X button on the "add item" dialog, used to close the dialog
let addItemDialogCloseElem = document.getElementById("add-dialog-close");

//"To do" button in the "add item" dialog
let addTaskElem = document.getElementById("add-modal-task");

let addProjectElem = document.getElementById("add-modal-project");

//element inside the "add item" dialog
//that element will contain a form 
//the form can either be for adding a task or a project
let modalContentFormElem = document.getElementById("modal-content-form");

//element where tasks are loaded
let allTasksElem = document.getElementById("all-tasks");

//the place where the project list will load
let allProjectsElem = document.getElementById("planning-projects-list");


export {
    addItemElem,
    addItemDialogElem,
    addItemDialogCloseElem,
    addTaskElem,
    addProjectElem,
    modalContentFormElem,
    allTasksElem,
    allProjectsElem
}