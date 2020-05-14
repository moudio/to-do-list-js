import printToDo from '../html_components/print_to_do';
import showAllTasks from '../functionalities/show_all_tasks';
import showProjectForm from '../functionalities/create_project_form';
import showAllProjects from '../functionalities/show_all_projects';

export default function addClickToNav() {
  const navItems = document.querySelectorAll('.nav-item');
  for (const li of navItems) {
    li.addEventListener('click', (e) => {
      switch (e.target.textContent) {
        case 'Create Task':
          printToDo();
          break;
        case 'All Tasks':
          showAllTasks();
          break;
        case 'Create Project':
          showProjectForm();
          break;
        case 'All Projects':
          showAllProjects();
          break;
          default:
              showAllProjects();
      }
    });

 
  }
}
