import completeTask from "../functionalities/complete_task";
import showThatTask from "../functionalities/show_one_task"
export default  function addEventsAfterPrintingAllTasks(){
    const allTasks = document.querySelectorAll('.task')
    for(let task of allTasks){
        task.addEventListener('click', (e) => {
            let taskTitle;
              if (e.target.classList.contains('complete')) {
                taskTitle = e.target.parentElement.firstChild.textContent;
                completeTask(taskTitle);
              } else if (e.target.classList.contains('see-more-button')) {
                taskTitle = e.target.parentElement.firstChild.textContent;
                showThatTask(taskTitle);
              
            }
          });
    }
}