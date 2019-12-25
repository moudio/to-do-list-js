import notice from '../html_components/alert';
import showProject from './show_one_project';

export default function removeTaskFromProject(projectName, taskName) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const project = projects.find((element) => element.name == projectName);
  if (
    confirm(
      `Do you want to remove the task ${taskName} from your project ${projectName} ?`,
    )
  ) {
    for (let i = 0; i < project.project_tasks.length; i++) {
      if (project.project_tasks[i].name === taskName) {
        project.project_tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
      }
    }
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name === taskName) {
        tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
    notice('Task Removed Successfully');
    showProject(projectName);
  }
}
