import { allTasksElem } from "../domVariables";
import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
//this function loads the tasks on the screen
//depending on parameters, it can load all of just from a project

function loadTasks(check, project) {
    //if check is 0, all tasks from all projects are loaded
    //if it's 1, only one project will load it's tasks
    //console.log(allTasksElem);

    if (check == 0) {
        //console.log("all tasks will be loaded...");
        //looping through localStorage to fish for tasks
        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);
            if (rez == "task") {
                console.log("incarca tot:");
                console.log(item);

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
                checkboxContainer.appendChild(titleE);
                checkboxContainer.appendChild(detailsE);
                checkboxContainer.appendChild(dueDateE);
                checkboxContainer.appendChild(editE);
                checkboxContainer.appendChild(deleteE);

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

                //adding input types and classes
                checkBoxE.type = "checkbox";
                editE.classList.add("fa-regular");
                editE.classList.add("fa-pen-to-square");
                deleteE.classList.add("fa-solid");
                deleteE.classList.add("fa-trash-can");

                //adding event listeners to the checkbox

                //adding event listeners to the details button

                //adding event listeners to the edit icon

                //adding event listeners to the delete icon

            }
        });
    }
    else {
        console.log("only tasks from the project will be loaded...");
        console.log(project);
        //looping through localStorage to fish for tasks
        console.log("looping...");
        Object.entries(localStorage).forEach((item) => {
            let rez = checkIfTaskOrProject(item);

            //condition to only show from the selected project
            if (rez == "task" && JSON.parse(item[1]).inProject == project) {
                console.log("item:");
                console.log(item);
            }
        });
    }
}

export { loadTasks };