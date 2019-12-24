import message from '../html_components/alert';
import showAllTasks from '../functionalities/show_all_tasks'
export default function completeTask(taskTitle, notice = true) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  for(let i = 0 ; i< tasks.length; i++){
      if (tasks[i].name === taskTitle){
        if(notice){
          if(confirm("want to remove the task?")){
      tasks.splice(i, 1);
      
        localStorage.setItem('tasks', JSON.stringify(tasks));
        message('Task Removed Successfully')
    }
} else {
  tasks.splice(i, 1);
      
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
showAllTasks();

  }
}
}
