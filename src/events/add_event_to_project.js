import showProject from "../functionalities/show_one_project";

export function addEventToProjectButtons () {
   const projects =  document.querySelectorAll('.view-project');
   for(let project of projects) {
    project.addEventListener('click', function(e){
       const project_name = e.target.previousSibling.innerHTML;
        showProject(project_name);
    })
   }
}