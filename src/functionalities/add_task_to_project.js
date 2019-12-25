import newTask from '../factories/newtask';
import showProject from './show_one_project';

export default function add_task_to_project() {
  const projectName = document.querySelector('h1').innerHTML;
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskDue = document.getElementById('taskDue').value;
  const taskPriority = taskRadioPriority();
  const task = newTask(taskTitle, taskDescription, taskDue, taskPriority);
  let projects;
  projects = JSON.parse(localStorage.getItem('projects'));
  const project = projects.find((project) => project.name === projectName);
  project.project_tasks.push(task);

  localStorage.setItem('projects', JSON.stringify(projects));
  showProject(projectName);
}


function taskRadioPriority() {
  const elements = document.getElementsByName('priority');
  for (const option of elements) {
    if (option.checked) {
      return option.value;
    }
  }
}
