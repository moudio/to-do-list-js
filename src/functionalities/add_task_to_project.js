import newTask from '../factories/newtask'
export default function add_task_to_project() {
    const projectName = document.querySelector('h1').innerHTML;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDue = document.getElementById('taskDue').value
    const taskPriority = taskRadioPriority();
    const task = newTask(taskTitle, taskDescription, taskDue, taskPriority); 
    let projects; 
    
   
    
        projects = JSON.parse(localStorage.getItem('projects'));
        console.log(taskTitle)
        const project = projects.find( project => project.name === projectName);
        console.log(projects); 
        console.log(project)
        project.project_tasks.push(task)
    
    localStorage.setItem('projects', JSON.stringify(projects));
    
}
    
    
    function taskRadioPriority(){
        const elements = document.getElementsByName('priority');
        for(let option of elements){
            if(option.checked){
                return option.value;
            }
        }
    }



