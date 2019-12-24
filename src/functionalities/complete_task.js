
import message from '../html_components/alert';
import showAllTasks from '../functionalities/show_all_tasks'
export default function completeTask(taskTitle) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  for(let i = 0 ; i< tasks.length; i++){
      if (tasks[i].name === taskTitle){
      
          if(confirm("want to remove the task?")){
      tasks.splice(i, 1);
      if(tasks.length === 0){
        localStorage.removeItem('tasks');
      } else{

        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
        message('Task Removed Successfully')
    }
}



showAllTasks();

  
}
}
