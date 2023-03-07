import { allTasksElem } from "../domVariables";
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

    //details dialog containers
    let detailsDialogHeaderContainer = document.createElement("div");
    let detailsDialogTitleContainer = document.createElement("div");
    let detailsDialogExitContainer = document.createElement("div");
    let detailsDialogInfoContainer = document.createElement("div");
    let detailsDialogInfoLeftContainer = document.createElement("div");
    let detailsDialogInfoRightContainer = document.createElement("div");
    let detailsDialogTitleLabelContainer = document.createElement("div");
    let detailsDialogDescriptionLabelContainer = document.createElement("div");
    let detailsDialogProjectLabelContainer = document.createElement("div");
    let detailsDialogDueDateLabelContainer = document.createElement("div");
    let detailsDialogTitleInfoContainer = document.createElement("div");
    let detailsDialogDescriptionInfoContainer = document.createElement("div");
    let detailsDialogProjectInfoContainer = document.createElement("div");
    let detailsDialogDueDateInfoContainer = document.createElement("div");

    //elements:
    let checkBoxE = document.createElement("input");
    let titleE = document.createElement("p");
    let detailsE = document.createElement("button");
    let dueDateE = document.createElement("p");
    let editE = document.createElement("i");
    let deleteE = document.createElement("i");

    //details dialog elements
    let detailsDialogE = document.createElement("dialog");
    let editDialogE = document.createElement("dialog");
    let deleteDialogE = document.createElement("dialog");
    let detailsDialogTitleText = document.createElement("p");
    let detailsDialogDescriptionText = document.createElement("p");
    let detailsDialogProjectText = document.createElement("p");
    let detailsDialogDueDateText = document.createElement("p");
    let detailsDialogTitleInfo = document.createElement("p");
    let detailsDialogDescriptionInfo = document.createElement("p");
    let detailsDialogProjectInfo = document.createElement("p");
    let detailsDialogDueDateInfo = document.createElement("p");
    let detailsDialogExitE = document.createElement("p");

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
    editContainer.appendChild(editDialogE);
    deleteContainer.appendChild(deleteE);
    deleteContainer.appendChild(deleteDialogE);

    //adding the containers for the details dialog
    detailsDialogE.appendChild(detailsDialogHeaderContainer);
    detailsDialogHeaderContainer.appendChild(detailsDialogTitleContainer);
    detailsDialogHeaderContainer.appendChild(detailsDialogExitContainer);
    detailsDialogE.appendChild(detailsDialogInfoContainer);
    detailsDialogInfoContainer.appendChild(detailsDialogInfoLeftContainer);
    detailsDialogInfoContainer.appendChild(detailsDialogInfoRightContainer);
    detailsDialogInfoLeftContainer.appendChild(detailsDialogDescriptionLabelContainer);
    detailsDialogInfoLeftContainer.appendChild(detailsDialogProjectLabelContainer);
    detailsDialogInfoLeftContainer.appendChild(detailsDialogDueDateLabelContainer);
    detailsDialogInfoRightContainer.appendChild(detailsDialogTitleInfoContainer);
    detailsDialogInfoRightContainer.appendChild(detailsDialogDescriptionInfoContainer);
    detailsDialogInfoRightContainer.appendChild(detailsDialogProjectInfoContainer);
    detailsDialogInfoRightContainer.appendChild(detailsDialogDueDateInfoContainer);

    //appending elements into their containers (for details dialog)
    detailsDialogTitleContainer.appendChild(detailsDialogTitleInfoContainer);
    detailsDialogExitContainer.appendChild(detailsDialogExitE);
    detailsDialogTitleLabelContainer.appendChild(detailsDialogTitleText);
    detailsDialogDescriptionLabelContainer.appendChild(detailsDialogDescriptionText);
    detailsDialogProjectLabelContainer.appendChild(detailsDialogProjectText);
    detailsDialogDueDateLabelContainer.appendChild(detailsDialogDueDateText);
    detailsDialogTitleInfoContainer.appendChild(detailsDialogTitleInfo);
    detailsDialogDescriptionInfoContainer.appendChild(detailsDialogDescriptionInfo);
    detailsDialogProjectInfoContainer.appendChild(detailsDialogProjectInfo);
    detailsDialogDueDateInfoContainer.appendChild(detailsDialogDueDateInfo);

    //adding info into the elemnts
    titleE.innerHTML = JSON.parse(item[1]).title;
    detailsE.innerHTML = "DETAILS";
    dueDateE.innerHTML = JSON.parse(item[1]).dueDate;

    //adding info into the elemnts (for details dialog)
    detailsDialogTitleInfo.innerHTML = "Title:";
    detailsDialogExitE.innerHTML = "X";
    detailsDialogDescriptionText.innerHTML = "Description:"
    detailsDialogProjectText.innerHTML = "In project:";
    detailsDialogDueDateText.innerHTML = "Due date:";
    detailsDialogTitleInfo.innerHTML = `${JSON.parse(item[1]).title}`;
    detailsDialogDescriptionInfo.innerHTML = `${JSON.parse(item[1]).description}`;
    detailsDialogProjectInfo.innerHTML = `${JSON.parse(item[1]).inProject}`;
    detailsDialogDueDateInfo.innerHTML = `${JSON.parse(item[1]).dueDate}`;

    //adding id's to the elemnts
    checkBoxE.id = `checkbox-${JSON.parse(item[1]).id}`;
    titleE.id = `title-${JSON.parse(item[1]).id}`;
    detailsE.id = `details-${JSON.parse(item[1]).id}`;
    detailsDialogE.id = `details-dialog-${JSON.parse(item[1]).id}`;
    dueDateE.id = `duedate-${JSON.parse(item[1]).id}`;
    editE.id = `edit-${JSON.parse(item[1]).id}`;
    editDialogE.id = `edit-dialog-${JSON.parse(item[1]).id}`;
    deleteE.id = `delete-${JSON.parse(item[1]).id}`;
    deleteDialogE.id = `delete-dialog-${JSON.parse(item[1]).id}`;

    //adding properties, input types and classes
    detailsDialogE.close();
    editDialogE.close();
    deleteDialogE.close();
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

    //adding properties, input types and classes for details dialog
    detailsDialogHeaderContainer.classList.add("details-dialog-header-container");
    detailsDialogInfoContainer.classList.add("details-dialog-info-container");
    detailsDialogInfoLeftContainer.classList.add("details-dialog-info-left-container");
    detailsDialogInfoRightContainer.classList.add("details-dialog-info-right-container");
    

    //adding event listeners to the checkbox

    //adding event listeners to the details button
    detailsE.addEventListener("pointerdown", () => {
        detailsDialogE.showModal();
    });

    //adding event listeners to the edit icon

    //adding event listeners to the delete icon
}

export { generateTaskElements };