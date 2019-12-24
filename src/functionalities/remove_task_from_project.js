export default function removeTaskFromProject(projectName, taskName) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.find( element => element.name == projectName);
    for(let i = 0 ; i < project.project_tasks.length; i++){
        if (project.project_tasks[i].name === taskName){
            if(confirm(`Do you want to remove the task ${taskName} from your project ${projectName} ?`)){
        project.project_tasks.splice(i, 1);
            
          localStorage.setItem('projects', JSON.stringify(projects));
          alert('Task Removed Successfully')
      }
  }
    }
}