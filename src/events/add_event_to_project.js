import showProject from "../functionalities/show_one_project";
import removeProject from '../functionalities/remove_project';
export function addEventToProjectButtons () {
   const projects =  document.querySelector('.app');

      projects.addEventListener('click', function(e){
         if(e.target.parentElement.firstChild.innerHTML){
         const project_name = e.target.parentElement.firstChild.innerHTML;
        if(e.target.classList.contains('view-project')){
           showProject(project_name);
        } else if (e.target.classList.contains('remove-project')){
           removeProject(project_name);
        }
      }
    })

      
}