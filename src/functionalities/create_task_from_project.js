import newTask from '../factories/newtask';
import notice from '../html_components/alert';

export default function createTaskFromProject(e) {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskDue = document.getElementById('taskDue').value;
  const taskPriority = taskRadioPriority();
  const projectName = document.querySelector('h1').textContent;
  const task = newTask(taskTitle, taskDescription, taskDue, taskPriority, projectName );
  let tasks;

  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  notice("Task created successfully")
}


function taskRadioPriority() {
  const elements = document.getElementsByName('priority');
  for (const option of elements) {
    if (option.checked) {
      return option.value;
    }
  }
}
