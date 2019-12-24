import {formatRelative, subDays } from 'date-fns'

export default function showTask(taskTitle) {
    let task_item;
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks)
    for(let task of tasks){
        if (task.name === taskTitle){
            task_item = task;
            break;
        }
    }
    console.log(task_item)

    
    const appContainer = document.querySelector('.app');
    appContainer.innerHTML = `<div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"> Details for task: ${task_item.name}</h5>
          <p class="card-text">Description: ${task_item.description}</p>
          <p class="card-text">Priority: ${task_item.priority}</p>
          <p class="card-text">Due date: ${formatRelative(subDays(new Date(), 3), new Date())}</p>
          <a href="#" class="btn btn-primary">Go back</a>
        </div>
      </div>
    </div> `
}