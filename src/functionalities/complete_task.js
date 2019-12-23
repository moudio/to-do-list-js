import alert from '../html_components/alert';
export default function completeTask(taskTitle) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  let completed_tasks;
  let task_item;
  console.log(tasks);
  for(let i = 0 ; i< tasks.length; i++){
      if (tasks[i].name === taskTitle){
          if(confirm("want to remove the task?")){
      tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        location.reload();
    }
}
  }
}
