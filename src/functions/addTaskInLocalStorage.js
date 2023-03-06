function addTaskInLocalStorage(key, task) {
    localStorage.setItem(key, JSON.stringify(task));
}

export {
    addTaskInLocalStorage
}