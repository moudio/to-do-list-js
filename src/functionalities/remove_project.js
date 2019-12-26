import notice from '../html_components/alert';
import showAllProjects from './show_all_projects';
import removeAllTasksOfAProject from './remove_all_tasks_of_a_project';

export default function removeProject(projectName) {
  removeAllTasksOfAProject(projectName);
  const projects = JSON.parse(localStorage.getItem('projects'));
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == projectName) {
      projects.splice(i, 1);
      if (projects.length === 0) {
        localStorage.removeItem('projects');
      } else {
        localStorage.setItem('projects', JSON.stringify(projects));
      }

    }
  }
  notice('Project Removed');

  showAllProjects();


}
