import printToDo from '../html_components/print_to_do';
import printNav from '../html_components/print_nav'
import printAllTasks from '../html_components/show_all_tasks';
import pintProjectForm from '../html_components/project_form';

export default function addClickToNav(){
    const navItems = document.querySelectorAll('.nav-item');
    const navBrand = document.querySelector('.navbar-brand');
    const body = document.querySelector('body'); 
    const dropDownItems = document.querySelectorAll('.dropdown-item');
    for(let li of navItems){
        li.addEventListener('click', function(e){
         
                if(e.target.textContent == 'New Task'){
                    body.innerHTML = '';
                    printNav();
                    printToDo();
                } else if(e.target.textContent == 'Home'){
                    body.innerHTML = '';
                    printNav();
                 printAllTasks()

                }
        })
    }

    navBrand.addEventListener('click', function(){
        body.innerHTML = '';
        printNav();
        printAllTasks();

      
    });


    for (let item of dropDownItems){
        item.addEventListener('click', function(e){
          if(e.target.textContent == 'New Project'){
              body.innerHTML = ''; 
              printNav();
              pintProjectForm();
          
          } else if(e.target.textContent == 'All Your Projects'){
              body.innerHTML = '';
              allProjects();
          }
    
        })
    }

}



    
