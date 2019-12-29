import notice from './../html_components/alert'
import showTask from './show_one_task'
export default function updateTaskOfProjet(task){
    const newTaskTitle = document.querySelector('#taskTitle').value;
    const newTaskDescription = document.querySelector('#taskDescription').value;
    const newTaskDate = document.querySelector('#taskDue').value;
    const newtaskPriority = taskRadioPriority();

const projects = JSON.parse(localStorage.getItem('projects')); 
let actual_project = projects.find(project => project.name === task.project);
let actual_project_tasks = actual_project['project_tasks'];
for(let i = 0 ; i < actual_project_tasks.length; i++){
    if(actual_project_tasks[i].name == task.name){
        actual_project_tasks[i].name = newTaskTitle;
        actual_project_tasks[i].description = newTaskDescription;
        actual_project_tasks[i].date = newTaskDate;
        actual_project_tasks[i].priority = newtaskPriority
    }
    break;

}

localStorage.setItem('projects', JSON.stringify(projects));

notice("Task Updated Successfully")
showTask(newTaskTitle);


}

function taskRadioPriority() {
    const elements = document.getElementsByName("priority");
    for (const option of elements) {
      if (option.checked) {
        return option.value;
      }
    }
  }