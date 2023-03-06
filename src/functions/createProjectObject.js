//this function constructs a new Project object

function createProjectObject(id, name) {

    //constructor for a new Project object
    function Project(id, name) {
    this.id = id;
    this.name = name;
    }

    //creating a new instance of Project object
    let newProject = new Project(id, name);
    console.log(newProject);
    return newProject;
}

export { createProjectObject };