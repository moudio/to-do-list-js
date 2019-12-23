import newTask from './factories/newtask'

export default function createTask(e){
    e.preventDefault();
const taskTitle = document.getElementById('taskTitle').value;
const taskDescription = document.getElementById('taskDescription').value;
const taskDue = document.getElementById('taskDue').value
const taskPriority = taskRadioPriority();
const task = newTask(taskTitle, taskDescription, taskDue, taskPriority); 
let tasks; 

if(!localStorage.getItem('tasks')){
    tasks = [];
} else {

    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
}
console.log(tasks)
tasks.push(task); 
localStorage.setItem('tasks', JSON.stringify(tasks));

}


function taskRadioPriority(){
    const elements = document.getElementsByName('priority');
    for(let option of elements){
        if(option.checked){
            return option.value;
        }
    }

}
