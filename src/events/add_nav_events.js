import printToDo from "../html_components/print_to_do";
import showAllTasks from "../functionalities/show_all_tasks";
import showProjectForm from "../functionalities/create_project_form";
import showAllProjects from "../functionalities/show_all_projects";
export default function addClickToNav() {
  const navItems = document.querySelectorAll(".list-group-item");
  const navBrand = document.querySelector(".sidebar-heading");
  for (let li of navItems) {
    li.addEventListener("click", function(e) {
      switch (e.target.textContent) {
        case "Create Task":
          printToDo();
          break;
        case "All Tasks":
          showAllTasks();
          break;
        case "Create Project":
          showProjectForm();
          break;
          case "All Projects":
              showAllProjects();
              break;
      }
    });

    navBrand.addEventListener("click", function() {
      showAllTasks();
    });

  }
}
