 import 'bootstrap'
 import './style.scss';
import newTask from './newtask';
import printToDo from './html_components/print_to_do';
import printNav from './html_components/print_nav';

printNav();
printToDo();

 document.querySelector('form').addEventListener('submit', createTask );
function createTask(e){
    e.preventDefault();
const taskTitle = document.getElementById('taskTitle').value;
const taskDescription = document.getElementById('taskDescription').value;
const taskDue = document.getElementById('taskDue').value
const taskPriority = taskRadioPriority();
const task = newTask(taskTitle, taskDescription, taskDue, taskPriority); 
localStorage.setItem(taskTitle, task);

}


function taskRadioPriority(){
    const elements = document.getElementsByName('priority');
    for(let option of elements){
        if(option.checked){
            return option.value;
        }
    }

}









