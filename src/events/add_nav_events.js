import printToDo from '../html_components/print_to_do';
import showAllTasks from '../html_components/show_all_tasks';
import showProjectForm from '../html_components/show_project_form';
import showAllProjects from '../html_components/show_all_projects'
export default function addClickToNav(){
    const navItems = document.querySelectorAll('.nav-item');
    const navBrand = document.querySelector('.navbar-brand');
    const dropDownItems = document.querySelectorAll('.dropdown-item');
    for(let li of navItems){
        li.addEventListener('click', function(e){
         
                if(e.target.textContent == 'New Task'){
                    printToDo();
                } else if(e.target.textContent == 'Home'){
                showAllTasks()
             }
        })
    }

    navBrand.addEventListener('click', function(){
        showAllTasks();      
    });


    for (let item of dropDownItems){
        item.addEventListener('click', function(e){
          if(e.target.textContent == 'New Project'){
                showProjectForm();
          
          } else if(e.target.textContent == 'All Your Projects'){
               showAllProjects();
          }
    
        })
    }

}



    
