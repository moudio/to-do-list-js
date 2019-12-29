import message from './../html_components/alert'
import showAllTasks from './show_all_tasks';
import removeTaskFromDefaultProject from './remove_task_from_default_project';
import removeTaskFromProject from './remove_task_from_project';

export default function completeTask(taskTitle) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
    let task; 
  
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name === taskTitle) {
      task = tasks[i];
      removeTaskOptions(task);
      if (confirm('want to remove the task?')) {
        tasks.splice(i, 1);
        if (tasks.length === 0) {
          localStorage.removeItem('tasks');
        } else {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        message("Task Removed Successfully")
        showAllTasks();

      }
  

  }


 


}
}

function removeTaskOptions(task){
if(task.project === "Default Project"){
  removeTaskFromDefaultProject(task.name);
} else {
  removeTaskFromProject(task.project, task.name);
}
    
}


