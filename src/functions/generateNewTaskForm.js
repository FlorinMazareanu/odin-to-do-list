import { addTaskInLocalStorage } from "./addTaskInLocalStorage";
import { createTaskObject } from "./createTaskObject"
//this function generated the "New task" form in the "add item" dialog
function generateNewTaskForm(form) {
    console.log("generateNewTaskForm");

    //DOM elements variables

    //groups (label + input)
    let titleGroup = document.createElement("div");
    let descriptionGroup = document.createElement("div");
    let dueDateGroup = document.createElement("div");
    let inProjectGroup = document.createElement("div");
    let buttonGroup = document.createElement("div");

    //labels and inputs
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

    //adding event listener on the "ADD TASK" button
    addButton.addEventListener("pointerdown", () => {
        console.log("add item");
        let newTask = createTaskObject("idtest", titleInput.value, descriptionInput.value, dueDateInput.value, "projecttest", "no");
        addTaskInLocalStorage("idtest", newTask);
    });

}

export { generateNewTaskForm };