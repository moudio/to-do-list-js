import showProjectForm from './show_task_form_for_project';

export default function showProject(name) {



  const projects = JSON.parse(localStorage.getItem('projects'));
  const project = projects.find((project) => project.name === name);
  projectUI(project);
}


function projectUI(project) {
  let appContainer;

  if (!document.querySelector('.app')) {
    appContainer = document.createElement('div');
  } else {
    appContainer = document.querySelector('.app');
  }

  appContainer.classList.add('container-fluid', 'app');

  const title = document.createElement('h1');
  title.innerHTML = `${project.name}`;
  appContainer.innerHTML = '';
  appContainer.appendChild(title);
  const addTask = document.createElement('div');
  addTask.classList.add('add-task');

  addTask.innerHTML = `<hr>
    <span class="add-task" > <i class="fas fa-plus"></i>  Add Task </span>`;
  appContainer.appendChild(addTask);
  const wrapperDiv = document.querySelector('.page-content-wrapper');
  wrapperDiv.appendChild(appContainer);
  showProjectForm();
}
