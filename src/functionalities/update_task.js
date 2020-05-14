export default function updateTask(task){
    const newTaskTitle = document.querySelector('#taskTitle').value;
    const newTaskDescription = document.querySelector('#taskDescription').value;
    const newTaskDate = document.querySelector('#taskDue').value;
    const newtaskPriority = taskRadioPriority();

    const tasks = JSON.parse(localStorage.getItem('tasks'));
for (let i = 0; i < tasks.length; i++){
    if(task.name === tasks[i].name){
        tasks[i].name = newTaskTitle;
        tasks[i].description = newTaskDescription;
        tasks[i].date = newTaskDate;
        tasks[i].priority = newtaskPriority
        
    }
}

localStorage.setItem('tasks', JSON.stringify(tasks));
}


function taskRadioPriority() {
    const elements = document.getElementsByName("priority");
    for (const option of elements) {
      if (option.checked) {
        return option.value;
      }
    }
  }