import newProjectFactory from './../factories/factory_project';
import showProject from './../functionalities/show_one_project';
import alert from '../html_components/alert';
export default function createDefaultProject(task) {
    let projects;
    let defaultProject;
    if (!localStorage.getItem('projects')) {
      projects = [];
      const newProject = newProjectFactory('Default Project');
      projects.push(newProject);
      defaultProject = projects[0];


    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
      for(let project of projects){
        if (project.name == 'Default Project'){
            defaultProject = project 
        }
        }
    }
  
    defaultProject['project_tasks'].push(task)
    localStorage.setItem('projects', JSON.stringify(projects));
    alert('Task created successfully');

    showProject('Default Project');
    
}