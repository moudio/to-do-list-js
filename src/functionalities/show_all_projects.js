import { addEventToProjectButtons } from "../events/add_event_to_project";

export default function showAllProjects() {
    const appContainer = document.querySelector('.app');
if(!localStorage.getItem('projects')){
    alert('No projects from now')
} else {
const projects = JSON.parse(localStorage.getItem('projects'));
appContainer.innerHTML = '';
const title = document.createElement('h1'); 
title.innerHTML = 'All Your Projects';
title.classList.add('text-center')
for(let project of projects){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    const projectName = document.createElement('p');
    projectName.classList.add('project-name');
    const viewProjectButton = document.createElement('button');
    viewProjectButton.textContent = "View Project"
    viewProjectButton.classList.add('btn', 'btn-warning', 'view-project');
    const removeProjectButton = document.createElement('button');
    removeProjectButton.textContent = 'Delete Project'; 
    removeProjectButton.classList.add('btn', 'btn-danger', 'remove-project'); 

 
    projectName.innerHTML = project.name;
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(viewProjectButton);
    projectDiv.appendChild(removeProjectButton);
    projectDiv.classList.add('project')
    
    appContainer.appendChild(projectDiv);
    appContainer.prepend(title);
}

}

addEventToProjectButtons()

}