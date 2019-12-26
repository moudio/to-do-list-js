export default function removeTaskFromDefaultProject(taskName){
   
    const projects = JSON.parse(localStorage.getItem('projects'));
    console.log("yes")
    const default_project = projects[0];
    console.log(default_project)
    const default_project_tasks = default_project['project_tasks'];
    console.log(default_project_tasks)
    console.log(taskName);

for(let i = 0 ; i < default_project_tasks.length ; i++)
  if(taskName === default_project_tasks[i].name){
      default_project_tasks.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(projects));

  }

    }
    
    