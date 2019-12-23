import newProjectFactory from '../factories/factory_project';
import alert from '../html_components/alert'

export default function createProject(e) {
    e.preventDefault();
    let projectName = document.getElementById('projectName');
    const newProject = newProjectFactory(projectName.value);
    let projects;

    if(!localStorage.getItem('projects')){
        projects = [];
    } else {
        projects = JSON.parse(localStorage.getItem('projects'));
    }

    projects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(projects));
    alert('Project Created Sucessfully');
    projectName.value = '';


}