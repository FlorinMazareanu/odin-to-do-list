//this function constructs a new Task object

function createTaskObject(id, title, description, dueDate, inProject, isDone) {

    //constructor for a new Task object
    function Task(id, title, description, dueDate, inProject, isDone) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.inProject = inProject;
    this.isDone = isDone;
    }

    //creating a new instance of Task object
    let newTask = new Task(id, title, description, dueDate, inProject, isDone);
    console.log(newTask);
    return newTask;
}

export {
    createTaskObject
}