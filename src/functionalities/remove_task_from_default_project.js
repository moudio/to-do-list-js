export default function removeTaskFromDefaultProject(taskName){
   
    const projects = JSON.parse(localStorage.getItem('projects'));
    const default_project = projects[0];
    const default_project_tasks = default_project['project_tasks'];
  
for(let i = 0 ; i < default_project_tasks.length ; i++)
  if(taskName === default_project_tasks[i].name){
      default_project_tasks.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(projects));

  }

    }
    
    