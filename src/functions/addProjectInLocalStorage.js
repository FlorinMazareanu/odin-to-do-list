function addProjectInLocalStorage(key, project) {
    localStorage.setItem(key, JSON.stringify(project));
}

export { addProjectInLocalStorage };