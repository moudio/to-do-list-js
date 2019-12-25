import newProjectFactory from '../factories/factory_project';
import alert from '../html_components/alert';
import showProject from './show_one_project';

export default function createProject(e) {
  e.preventDefault();
  const projectName = document.getElementById('projectName');
  const newProject = newProjectFactory(projectName.value);
  let projects;

  if (!localStorage.getItem('projects')) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }

  projects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects));
  alert('Project Created Sucessfully');
  showProject(projectName.value);
  projectName.value = '';
}
