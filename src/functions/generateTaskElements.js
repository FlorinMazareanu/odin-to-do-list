import { allTasksElem } from "../domVariables";
import { deleteProject } from "./deleteProject";
import { generateDetailsDialog } from "./generateDetailsDialog";
import { toggleTaskCompletion } from "./toggleTaskCompletion";
import { deleteTask } from "./deleteTask";
import { loadTasks } from "./loadTasks";

//this function generates the elements of the tasks
//it's used by loadTasks.js

//using "selected-project" to load only from that selected project
//side-note: this is used to show the project's tasks right after deleting a task
//the "check" variable from loadTasks() does this for loading tasks after clicking a project's name

function generateTaskElements(item) {

    //defining DOM elements that will be added later
    //the main container for the item:
    let itemContainer = document.createElement("div");
    //the two containers to separate the item in 2
    let leftContainer = document.createElement("div");
    let rightContainer = document.createElement("div");

    //element containers
    let checkboxContainer = document.createElement("div");
    let titleContainer = document.createElement("div");
    let detailsContainer = document.createElement("div");
    let dueDateContainer = document.createElement("div");
    let deleteContainer = document.createElement("div");

    //elements:
    let checkBoxE = document.createElement("input");
    let titleE = document.createElement("p");
    let detailsE = document.createElement("button");
    let dueDateE = document.createElement("p");
    let deleteE = document.createElement("i");

    //dialog elements
    let detailsDialogE = document.createElement("dialog");
    let deleteDialogE = document.createElement("dialog");

    //adding the containers
    allTasksElem.appendChild(itemContainer);
    itemContainer.appendChild(leftContainer);
    itemContainer.appendChild(rightContainer);
    leftContainer.appendChild(checkboxContainer);
    leftContainer.appendChild(titleContainer);
    rightContainer.appendChild(detailsContainer);
    rightContainer.appendChild(dueDateContainer);
    rightContainer.appendChild(deleteContainer);
    
    //appending elements into their containers
    checkboxContainer.appendChild(checkBoxE);
    titleContainer.appendChild(titleE);
    detailsContainer.appendChild(detailsE);
    detailsContainer.appendChild(detailsDialogE); 
    dueDateContainer.appendChild(dueDateE);   
    deleteContainer.appendChild(deleteE);

    //adding info into the elemnts
    titleE.innerHTML = JSON.parse(item[1]).title;
    detailsE.innerHTML = "DETAILS";
    dueDateE.innerHTML = JSON.parse(item[1]).dueDate;

    //adding id's to the elemnts
    checkBoxE.id = `checkbox-${JSON.parse(item[1]).id}`;
    titleE.id = `title-${JSON.parse(item[1]).id}`;
    detailsE.id = `details-${JSON.parse(item[1]).id}`; 
    dueDateE.id = `duedate-${JSON.parse(item[1]).id}`; 
    deleteE.id = `delete-${JSON.parse(item[1]).id}`;    
    detailsDialogE.id = `details-dialog-${JSON.parse(item[1]).id}`;
    deleteDialogE.id = `delete-dialog-${JSON.parse(item[1]).id}`;

    //adding properties, input types and classes
    checkBoxE.type = "checkbox";
    deleteE.classList.add("fa-solid");
    deleteE.classList.add("fa-trash-can");
    itemContainer.classList.add("item-container");
    leftContainer.classList.add("left-container");
    rightContainer.classList.add("right-container");
    checkboxContainer.classList.add("checkbox-container");
    titleContainer.classList.add("title-container");
    detailsContainer.classList.add("details-container");
    dueDateContainer.classList.add("duedate-container");
    deleteContainer.classList.add("delete-container");
    checkBoxE.classList.add("item-element");
    titleE.classList.add("item-element");
    detailsE.classList.add("item-element");
    dueDateE.classList.add("item-element");
    deleteE.classList.add("item-element");
    detailsDialogE.classList.add("details-dialog");
    
    //making the checkbox toggled when the task loads
    if (JSON.parse(item[1]).isDone == "yes") {
        checkBoxE.checked = true;
    }
    else {
        checkBoxE.checked = false;
    }

    //adding event listeners to the checkbox
    checkBoxE.addEventListener("change", () => {
        let checkboxStatus = "";
        if (checkBoxE.checked) {
            checkboxStatus = "checked";
        }
        else {
            checkboxStatus = "unchecked";
        }
        toggleTaskCompletion(item, checkboxStatus);
    });

    //adding event listeners to the details button
    detailsE.addEventListener("pointerdown", () => {
        generateDetailsDialog(item);
    });

    //adding event listeners to the delete icon
    deleteContainer.addEventListener("pointerdown", () => {
        deleteTask(item);
        loadTasks(0);
    });
}

export { generateTaskElements };