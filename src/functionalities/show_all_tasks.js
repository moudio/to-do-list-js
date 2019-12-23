import showThatTask from "./show_one_task";
import removeTask from "./complete_task";
import completeTask from "./complete_task";
function showAllTasks() {
  let tasks = localStorage.getItem("tasks");
  const h1 = document.createElement("h1");
  const wrapper = document.querySelector("#page-content-wrapper");
  let appContainer;
  if(!document.querySelector('.app')){
    appContainer = document.createElement("div");
  } else {
      appContainer = document.querySelector('.app');
  }
  
  appContainer.classList.add("container-fluid", "app");
  appContainer.innerHTML = "";
  h1.textContent = "Welcome! Here are your tasks";
  h1.classList.add("text-center");
  appContainer.prepend(h1);
  if (tasks) {
    tasks = JSON.parse(tasks);
    for (let task of tasks) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task", `${task.priority.toLowerCase()}`);
      const taskName = document.createElement("p");
      const dueDate = document.createElement("p");
      dueDate.textContent = ` Due: ${task.date}`;
      taskName.textContent = task.name;
      const button_complete = document.createElement("button");
      button_complete.textContent = "Mark as complete";
      button_complete.classList.add("btn", "btn-xs", "btn-danger", "complete");

      const button_more = document.createElement("button");
      button_more.textContent = "See more";
      button_more.classList.add("btn", "btn-xs", "btn-info", "see-more-button");

      taskDiv.appendChild(taskName);
      taskDiv.appendChild(dueDate);
      taskDiv.appendChild(button_more);
      taskDiv.appendChild(button_complete);
      appContainer.appendChild(taskDiv);
      wrapper.appendChild(appContainer);
    }
  }

  document.querySelector(".app").addEventListener("click", function(e) {
    const taskTitle = e.target.parentElement.firstChild.textContent;
    if (e.target.classList.contains("complete")) {
      completeTask(taskTitle);
    } else if (e.target.classList.contains("see-more-button")) {
      showThatTask(taskTitle);
    }
  });
}

export default showAllTasks;
