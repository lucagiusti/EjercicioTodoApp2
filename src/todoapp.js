const addTimer = (name, time) => {
    const task = tasks.find(task => task.name === name);
    task.timer = time;
}

