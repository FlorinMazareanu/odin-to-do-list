//this function removes the current forms in the "add item" dialog
//this is executed to avoid having multiple forms at the same time

function removeAddItemForms(form) {
    form.innerHTML = "";
}

export { removeAddItemForms };