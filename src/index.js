//importing DOM variables
import { addItemElem } from "./domVariables";

//importing functions
import { createTaskObject } from "./functions/createTaskObject";
import { addTaskInLocalStorage } from "./functions/addTaskInLocalStorage";
import { openAddItemDialog } from "./functions/openAddItemDialog";

//creating a new Task
let newTask = createTaskObject(1, "fa curat", "treci la treaba", "azi", "curatenie", "nu");
console.log(newTask);

//inserting in localStorage
addTaskInLocalStorage(newTask.id, newTask);

console.log(addItemElem);

//event listeners for DOM elements
addItemElem.addEventListener("pointerdown", () => {
    openAddItemDialog();
});
