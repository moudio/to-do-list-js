import printToDoForm from '../html_components/print_to_do';
import addEventsAfterPrintingAllTasks from '../events/add_events_after_printing_all_tasks'

function showAllTasks() {
  let tasks = localStorage.getItem('tasks');
  const h1 = document.createElement('h1');
  const wrapper = document.querySelector('.page-content-wrapper');
  let appContainer;

  if (!document.querySelector('.app')) {
    appContainer = document.createElement('div');
  } else {
    appContainer = document.querySelector('.app');
  }

  appContainer.classList.add('container-fluid', 'app');
  appContainer.innerHTML = '';
  h1.textContent = 'Welcome! Here are your tasks';
  h1.classList.add('text-center');
  appContainer.prepend(h1);


  if (tasks) {
    tasks = JSON.parse(tasks);
    for (const task of tasks) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task', `${task.priority.toLowerCase()}`);
      const taskName = document.createElement('p');
      taskName.classList.add('task-name');
      const dueDate = document.createElement('p');
      dueDate.textContent = ` Due: ${task.date}`;
      taskName.textContent = task.name;
      const button_complete = document.createElement('button');
      button_complete.textContent = 'Mark as complete';
      button_complete.classList.add('btn', 'btn-xs', 'btn-danger', 'complete');

      const button_more = document.createElement('button');
      button_more.textContent = 'See more';
      button_more.classList.add('btn', 'btn-xs', 'btn-info', 'see-more-button');

      taskDiv.appendChild(taskName);
      taskDiv.appendChild(dueDate);
      taskDiv.appendChild(button_more);
      taskDiv.appendChild(button_complete);
      appContainer.appendChild(taskDiv);
      wrapper.appendChild(appContainer);
    }

    const appCont = document.querySelector('.app');
    if (appCont) {
     addEventsAfterPrintingAllTasks() 
    }
  } else {
    h1.textContent = 'No tasks from now, add new ones';
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('btn', 'btn-success', 'add-new-task', 'text-center');
    addTaskButton.textContent = 'Add a new task';
    appContainer.appendChild(h1);
    appContainer.appendChild(addTaskButton);
    wrapper.appendChild(appContainer);

    addTaskButton.addEventListener('click', () => {
      printToDoForm();
    });
  }
}

export default showAllTasks;
