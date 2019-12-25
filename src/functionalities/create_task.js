import newTask from '../factories/newtask';
import notice from '../html_components/alert';
import showAllTasks from './show_all_tasks';
import printToDoForm from '../html_components/print_to_do';

export default function createTask(e) {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskDue = document.getElementById('taskDue').value;
  const taskPriority = taskRadioPriority();
  const task = newTask(taskTitle, taskDescription, taskDue, taskPriority);
  let tasks;


  if (!taskDue) {
    alert('Please choose a due date');
    printToDoForm();
    return;
  }

  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  notice('Task Created Successfully');

  showAllTasks();
}


function taskRadioPriority() {
  const elements = document.getElementsByName('priority');
  for (const option of elements) {
    if (option.checked) {
      return option.value;
    }
  }
}
