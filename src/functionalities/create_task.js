import newTask from "../factories/newtask";
import printToDoForm from "../html_components/print_to_do";
import showDefaultProject from "./create_default_project";
import moment from "moment";
export default function createTask(e) {
  e.preventDefault();
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDue = document.getElementById("taskDue").value;
  const taskPriority = taskRadioPriority();
  const task = newTask(taskTitle, taskDescription, taskDue, taskPriority);
  let tasks;

  const time = moment(taskDue);
  if (!time.isValid()) {
    alert('Please choose a due date');
    printToDoForm();
    return;
  }

  if (!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showDefaultProject(task);

}

function taskRadioPriority() {
  const elements = document.getElementsByName("priority");
  for (const option of elements) {
    if (option.checked) {
      return option.value;
    }
  }
}
