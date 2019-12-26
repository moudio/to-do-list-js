
import message from '../html_components/alert';
import showAllTasks from './show_all_tasks';
import removeTaskFromDefaultProject from './remove_task_from_default_project';

export default function completeTask(taskTitle) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name === taskTitle) {
      if (confirm('want to remove the task?')) {
        tasks.splice(i, 1);
        if (tasks.length === 0) {
          localStorage.removeItem('tasks');
        } else {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      }
    }
     
  }
  removeTaskFromDefaultProject(taskTitle);
  message('Task Removed Successfully');
  showAllTasks();


}
