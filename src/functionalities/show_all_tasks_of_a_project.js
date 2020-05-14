import addEventsToAllTasksOfProject from './../events/add_events_to_all_tasks_of_project'
export default function showAllTasksOfAProject() {
  const projectName = document.querySelector('h1');
  const projects = JSON.parse(localStorage.getItem('projects'));
  const project = projects.find((project) => project.name === projectName.textContent);
  const divForProjects = document.createElement('div');
  divForProjects.classList.add('projects')
  const addTaskDiv = document.querySelector('.add-task');

  addTaskDiv.insertAdjacentElement('beforebegin', divForProjects);
  for (const proj of project.project_tasks) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    const nameOfProject = document.createElement('p');
    const viewProjectButton = document.createElement('button');
    viewProjectButton.textContent = 'View Task';
    viewProjectButton.classList.add('btn', 'btn-warning', 'see-more-button');
    const markCompleteButton = document.createElement('button');
    markCompleteButton.classList.add('btn', 'btn-danger', 'complete-task');
    markCompleteButton.textContent = 'Mark As Complete';

    nameOfProject.innerHTML = proj.name;
    projectDiv.appendChild(nameOfProject);
    projectDiv.appendChild(viewProjectButton);
    projectDiv.appendChild(markCompleteButton);
    projectDiv.classList.add('project');
    divForProjects.appendChild(projectDiv);
  }

addEventsToAllTasksOfProject();
}

