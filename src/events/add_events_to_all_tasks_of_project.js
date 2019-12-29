import showThatTask from './../functionalities/show_one_task';
import removeFromProject from './../functionalities/remove_task_from_project';
export default function addEventToAllTasksOfProject(){

  const projectContainer = document.querySelector('.projects');


    projectContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-task')) {
            const taskTitle = e.target.parentElement.firstChild.innerHTML;
          const projectName = document.querySelector('h1').textContent;
          removeFromProject(projectName, taskTitle);
        } else if (e.target.classList.contains('see-more-button')) {
            const taskTitle = e.target.parentElement.firstChild.innerHTML;
          showThatTask(taskTitle);
        }
      
    });
  }


