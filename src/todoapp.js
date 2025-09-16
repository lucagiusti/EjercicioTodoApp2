const uncompleteTask = (name) => {
    const task = tasks.find(task => task.name === name);
    task.done = true;
}
