import { closeDetailsDialog } from "./closeDetailsDialog";

//this function generates elements in the details dialog
function generateDetailsDialog(item) {

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

    //details dialog elements
    
    let detailsDialogE = document.getElementById(`details-dialog-${JSON.parse(item[1]).id}`);

    //removing current dialog to avoid duplicates when the same item "details" button is clicked
    detailsDialogE.innerHTML = "";
    
   
    let detailsDialogTitleText = document.createElement("p");
    let detailsDialogDescriptionText = document.createElement("p");
    let detailsDialogProjectText = document.createElement("p");
    let detailsDialogDueDateText = document.createElement("p");
    let detailsDialogTitleInfo = document.createElement("h2");
    let detailsDialogDescriptionInfo = document.createElement("p");
    let detailsDialogProjectInfo = document.createElement("p");
    let detailsDialogDueDateInfo = document.createElement("p");
    let detailsDialogExitE = document.createElement("h2");

    //appending elements into their containers
    //detailsContainer.appendChild(detailsDialogE);
    //deleteContainer.appendChild(deleteDialogE);

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

    //adding event listener to close the modal
    detailsDialogExitE.addEventListener("pointerdown", () => {
        closeDetailsDialog(detailsDialogE);
    });

    //adding properties, input types and classes for details dialog
    detailsDialogHeaderContainer.classList.add("details-dialog-header-container");
    detailsDialogInfoContainer.classList.add("details-dialog-info-container");
    detailsDialogInfoLeftContainer.classList.add("details-dialog-info-left-container");
    detailsDialogInfoRightContainer.classList.add("details-dialog-info-right-container");
    detailsDialogExitE.classList.add("details-dialog-close");

    //showing the dialog
    detailsDialogE.showModal();
}

export { generateDetailsDialog };