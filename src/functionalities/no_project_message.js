import showProjectForm from './create_project_form';
export default function noProjectMessage(){
  
    const appContainer = document.querySelector('.app');
    appContainer.innerHTML = ''
    const title = document.createElement('h1'); 
    title.innerHTML = 'No projects From Now'; 
    appContainer.appendChild(title);
    title.classList.add('text-center');
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('btn', 'btn-success', 'add-project-button') 
    addProjectButton.textContent = "Add New Project";
    appContainer.appendChild(addProjectButton);
    const button = document.querySelector('.add-project-button');

    button.addEventListener('click', function(){
        showProjectForm();
    })

}