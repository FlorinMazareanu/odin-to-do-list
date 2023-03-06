//this function checks if it's a task or a project
//is sometimes used when looping through localStorage
//to make sure that the right kind of item appears when asked for
function checkIfTaskOrProject() {
    let typeOfItem = "";
    Object.entries(localStorage).forEach((item) => {
        console.log(item);
    });
    return typeOfItem;
}

export { checkIfTaskOrProject };