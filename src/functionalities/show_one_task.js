import { formatDistanceToNow } from 'date-fns';
import showAllProjects from './show_all_projects';
import editTask from './edit_task';

export default function showTask(taskTitle) {
  let task_item;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (const task of tasks) {
    if (task.name === taskTitle) {
      task_item = task;
      break;
    }
  }

  const appContainer = document.querySelector('.app');
  appContainer.innerHTML = `<div class="row">
    <div class="col-sm-10 col-md-6 task-details-div">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"> Details for task: ${task_item.name}</h5>
          <p class="card-text">Description: ${task_item.description}</p>
          <p class="card-text">Priority: ${task_item.priority}</p>
          <p class="card-text">Due date: ${formatDistanceToNow(new Date(task_item.date))} from now</p>
          <a href="#" class="btn btn-primary go-back">Go Back</a>
          <a href="#" class="btn btn-warning edit-task">Edit</a>
        </div>


      </div>
    </div> 
    `;

  const goBack = document.querySelector('.go-back');
  const edit_task = document.querySelector('.edit-task');
  

  // edit_task.addEventListener('click', editTask(task_item.name));

  goBack.addEventListener('click', showAllProjects);
edit_task.addEventListener('click', function(){
  editTask(task_item)
});
  
  
}


