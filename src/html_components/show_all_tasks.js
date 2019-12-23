
    function showAllTasks (){
    let tasks = localStorage.getItem('tasks'); 
    const h1 = document.createElement('h1');
    const appContainer = document.querySelector('.app');
    appContainer.innerHTML = '';
    h1.textContent = "Welcome! Here are your tasks";
    h1.classList.add('text-center')  
    appContainer.prepend(h1);
    if(tasks){
        tasks = JSON.parse(tasks);
        for(let task of tasks){
            
            const taskDiv = document.createElement('div')
            taskDiv.classList.add('task');
            const taskName = document.createElement('p');
            const dueDate = document.createElement('p'); 
            dueDate.textContent = ` Due: ${task.date}`;
            taskName.textContent = task.name;
            const button = document.createElement('button');
            button.textContent = 'Mark as complete'; 
            button.classList.add('btn', 'btn-success');            

            taskDiv.appendChild(taskName); 
            taskDiv.appendChild(dueDate);
            taskDiv.appendChild(button);
            appContainer.appendChild(taskDiv);


        }



    }
}




export default showAllTasks;