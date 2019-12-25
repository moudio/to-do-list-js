import showProjectForm from './show_task_form_for_project';

export default function showProject(name) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const project = projects.find((project) => project.name === name);
  projectUI(project);
}


function projectUI(project) {
  const appContent = document.querySelector('.app');
  const title = document.createElement('h1');
  title.innerHTML = `${project.name}`;
  appContent.innerHTML = '';
  appContent.appendChild(title);
  const addTask = document.createElement('div');
  addTask.classList.add('add-task');

  addTask.innerHTML = `<hr>
    <span class="add-task" > <i class="fas fa-plus"></i>  Add Task </span>`;
  appContent.appendChild(addTask);
  showProjectForm();
}
