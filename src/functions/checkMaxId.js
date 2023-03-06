//this function checks the max id
//in order to make sure that no item is overritten
//any new project/task must have a new, unique id

function checkMaxId() {
    let maxId = 0;
    let idArray = [];
    Object.entries(localStorage).forEach((item) => {
        idArray.push(JSON.parse(item[1]).id);
    });
    maxId = Math.max(...idArray);
    return maxId;
}

export { checkMaxId };