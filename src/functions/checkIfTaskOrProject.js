//this function checks if it's a task or a project
//is sometimes used when looping through localStorage
//to make sure that the right kind of item appears when asked for
function checkIfTaskOrProject(item) {
    let typeOfItem = "";
    //console.log("testing if task or project")

    let objToCheck = JSON.parse(item[1]);
    //console.log(objToCheck);
    if (objToCheck.hasOwnProperty("name")) {
        typeOfItem = "project";
    }
    else {
        typeOfItem = "task";
    }

    return typeOfItem;
}

export { checkIfTaskOrProject };