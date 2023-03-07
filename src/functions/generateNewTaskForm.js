import { addTaskInLocalStorage } from "./addTaskInLocalStorage";
import { createTaskObject } from "./createTaskObject"
import { checkMaxId } from "./checkMaxId";
import { addItemDialogElem } from "../domVariables";
import { closeAddItemDialog } from "./closeAddItemDialog";
import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadTasks } from "./loadTasks";
import { allTasksElem } from "../domVariables";

//this function generated the "New task" form in the "add item" dialog
function generateNewTaskForm(form) {
    //console.log("generateNewTaskForm");

    //DOM elements variables

    //groups (label + input)
    let titleGroup = document.createElement("div");
    let descriptionGroup = document.createElement("div");
    let dueDateGroup = document.createElement("div");
    let inProjectGroup = document.createElement("div");
    let buttonGroup = document.createElement("div");

    //labels, inputs and button
    let titleLabel = document.createElement("p");
    let titleInput = document.createElement("input");
    let descriptionLabel = document.createElement("p");
    let descriptionInput = document.createElement("input");
    let dueDateLabel = document.createElement("p");
    let dueDateInput = document.createElement("input");
    let inProjectLabel = document.createElement("p");
    let inProjectSelect = document.createElement("select");
    let addButton = document.createElement("button");

    //adding groups into the form
    form.appendChild(titleGroup);
    form.appendChild(descriptionGroup);
    form.appendChild(dueDateGroup);
    form.appendChild(inProjectGroup);
    form.appendChild(buttonGroup);

    //adding labels and inputs into the groups
    titleGroup.appendChild(titleLabel);
    titleGroup.appendChild(titleInput);
    descriptionGroup.appendChild(descriptionLabel);
    descriptionGroup.appendChild(descriptionInput);
    dueDateGroup.appendChild(dueDateLabel);
    dueDateGroup.appendChild(dueDateInput);
    inProjectGroup.appendChild(inProjectLabel);
    inProjectGroup.appendChild(inProjectSelect);
    buttonGroup.appendChild(addButton);

    //adding text to the labels and button
    titleLabel.innerHTML = "Title:";
    descriptionLabel.innerHTML = "Description:";
    dueDateLabel.innerHTML = "Due date:";
    inProjectLabel.innerHTML = "In project:";
    addButton.innerHTML = "ADD TASK";

    //changing input type
    titleInput.type = "text";
    descriptionInput.type = "text";
    dueDateInput.type = "date";

    //adding placeholder text to the inputs
    titleInput.placeholder = "Task name...";
    descriptionInput.placeholder = "Describe the task...";

    //adding id's and classes to the elements

    //adding options to the "inProject" select
    Object.entries(localStorage).forEach((item) => {
        let type = checkIfTaskOrProject(item);
        if (type == "project") {
            let option = document.createElement("option");
            option.innerHTML = JSON.parse(item[1]).name;
            //selected-project should not be here in options
            if (JSON.parse(item[1]).name != "selected-project") {
                inProjectSelect.add(option);
            }      
        }
    });

    //adding event listener on the "ADD TASK" button
    addButton.addEventListener("pointerdown", () => {

        //checking max id in localStorage (so the next item will not use a used id)
        let maxId = checkMaxId();
        let idToInsert = maxId + 1;

        //creating a new Task and adding it into localStorage
        let newTask = createTaskObject(idToInsert, titleInput.value, descriptionInput.value, dueDateInput.value, inProjectSelect.value, "no");
        addTaskInLocalStorage(idToInsert, newTask);

        //closing the dialog, reloading tasks
        closeAddItemDialog(addItemDialogElem);
        allTasksElem.innerHTML = "";
        loadTasks(0);
    });

}

export { generateNewTaskForm };