import { allTasksElem } from "../domVariables";
import { generateDetailsDialog } from "./generateDetailsDialog";
import { toggleTaskCompletion } from "./toggleTaskCompletion";
//this function generates the elements of the tasks
//it's used by loadTasks.js

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
    let editContainer = document.createElement("div");
    let deleteContainer = document.createElement("div");

    //elements:
    let checkBoxE = document.createElement("input");
    let titleE = document.createElement("p");
    let detailsE = document.createElement("button");
    let dueDateE = document.createElement("p");
    let editE = document.createElement("i");
    let deleteE = document.createElement("i");

    //dialog elements
    let detailsDialogE = document.createElement("dialog");
    let editDialogE = document.createElement("dialog");
    let deleteDialogE = document.createElement("dialog");

    //adding the containers
    allTasksElem.appendChild(itemContainer);
    itemContainer.appendChild(leftContainer);
    itemContainer.appendChild(rightContainer);
    leftContainer.appendChild(checkboxContainer);
    leftContainer.appendChild(titleContainer);
    rightContainer.appendChild(detailsContainer);
    rightContainer.appendChild(dueDateContainer);
    rightContainer.appendChild(editContainer);
    rightContainer.appendChild(deleteContainer);
    
    //appending elements into their containers
    checkboxContainer.appendChild(checkBoxE);
    titleContainer.appendChild(titleE);
    detailsContainer.appendChild(detailsE);
    detailsContainer.appendChild(detailsDialogE); 
    dueDateContainer.appendChild(dueDateE);
    editContainer.appendChild(editE);    
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
    editE.id = `edit-${JSON.parse(item[1]).id}`;   
    deleteE.id = `delete-${JSON.parse(item[1]).id}`;    
    detailsDialogE.id = `details-dialog-${JSON.parse(item[1]).id}`;
    editDialogE.id = `edit-dialog-${JSON.parse(item[1]).id}`;
    deleteDialogE.id = `delete-dialog-${JSON.parse(item[1]).id}`;

    //adding properties, input types and classes
    checkBoxE.type = "checkbox";
    editE.classList.add("fa-regular");
    editE.classList.add("fa-pen-to-square");
    deleteE.classList.add("fa-solid");
    deleteE.classList.add("fa-trash-can");
    itemContainer.classList.add("item-container");
    leftContainer.classList.add("left-container");
    rightContainer.classList.add("right-container");
    checkboxContainer.classList.add("checkbox-container");
    titleContainer.classList.add("title-container");
    detailsContainer.classList.add("details-container");
    dueDateContainer.classList.add("duedate-container");
    editContainer.classList.add("edit-container");
    deleteContainer.classList.add("delete-container");
    checkBoxE.classList.add("item-element");
    titleE.classList.add("item-element");
    detailsE.classList.add("item-element");
    dueDateE.classList.add("item-element");
    editE.classList.add("item-element");
    deleteE.classList.add("item-element");
    
    //making the checkbox toggled when the task loads
    if (JSON.parse(item[1]).isDone == "yes") {
        checkBoxE.checked = true;
        console.log("should be checked");
    }
    else {
        console.log("should be unchecked");
        checkBoxE.checked = false;
    }

    //adding event listeners to the checkbox
    checkBoxE.addEventListener("change", () => {
        let checkboxStatus = "";
        if (checkBoxE.checked) {
            console.log("checked");
            checkboxStatus = "checked";
        }
        else {
            console.log("not checked");
            checkboxStatus = "unchecked";
        }
        toggleTaskCompletion(item, checkboxStatus);
    });

    //adding event listeners to the details button
    detailsE.addEventListener("pointerdown", () => {
        generateDetailsDialog(item);
        //detailsDialogE.showModal();
    });

    //adding event listeners to the edit icon

    //adding event listeners to the delete icon
}

export { generateTaskElements };