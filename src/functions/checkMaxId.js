//this function checks the max id
//in order to make sure that no item is overritten
//any new project/task must have a new, unique id

function checkMaxId() {
    let maxId = 0;
    let idArray = [];
    console.log("checking max id");
    Object.entries(localStorage).forEach((item) => {
        //console.log(item);
        console.log(JSON.parse(item[1]).id);
        idArray.push(JSON.parse(item[1]).id);
    });
    console.log("idArray dupa prelucrare: ");
    console.log(idArray);
    maxId = Math.max(...idArray);
    console.log("id max este:");
    console.log(maxId);
    return maxId;
}

export { checkMaxId };