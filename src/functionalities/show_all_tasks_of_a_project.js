import showThatTask from './show_one_task';
import removeFromProject from './remove_task_from_project';
export default function showAllTasksOfAProject() {
   const projectName = document.querySelector('h1');
   const projects = JSON.parse(localStorage.getItem('projects'));
   const project = projects.find(project => project.name === projectName.textContent);
   const divForProjects = document.createElement('div');
   const addTaskDiv = document.querySelector('.add-task');

   addTaskDiv.insertAdjacentElement('beforebegin', divForProjects);
   for(let proj of project.project_tasks){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    const nameOfProject = document.createElement('p');
    const viewProjectButton = document.createElement('button');
    viewProjectButton.textContent = "View Task"
    viewProjectButton.classList.add('btn', 'btn-warning', 'see-more-button');
    const markCompleteButton = document.createElement('button'); 
    markCompleteButton.classList.add('btn', 'btn-danger', 'complete-task')
    markCompleteButton.textContent = "Mark As Complete";
 
    nameOfProject.innerHTML = proj.name;
    projectDiv.appendChild(nameOfProject);
    projectDiv.appendChild(viewProjectButton);
    projectDiv.appendChild(markCompleteButton)
    projectDiv.classList.add('project')
    divForProjects.appendChild(projectDiv);
}

const projectContainer = document.querySelector(".project")
if (projectContainer){
  projectContainer.addEventListener("click", function(e) {
  if(e.target.parentElement.firstChild.innerHTML){
    const taskTitle = e.target.parentElement.firstChild.innerHTML
  
  
  if (e.target.classList.contains("complete-task")) {

      const projectName = document.querySelector('h1').textContent;
      removeFromProject(projectName, taskTitle);

    } else if (e.target.classList.contains("see-more-button")) {

      showThatTask(taskTitle);
    }
  }
  });
}

}