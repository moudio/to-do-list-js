import alert from '../html_components/alert'
import showAllProjects from './show_all_projects';
export default function removeProject(projectName){
    const projects = JSON.parse(localStorage.getItem('projects'));
    for(let i = 0 ; i < projects.length; i++){
        if(projects[i].name == projectName){
            console.log(projectName)
            projects.splice(i, 1);
            if(projects.length === 0){
                localStorage.removeItem('projects');
            } else {
            localStorage.setItem('projects', JSON.stringify(projects));
            }
            alert("Project Removed"); 
            showAllProjects();
        }
        
    }
}