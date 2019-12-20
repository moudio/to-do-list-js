
    function printAllTasks (){
    let tasks = localStorage.getItem('tasks'); 
    const h1 = document.createElement('h1');
    h1.textContent = "Welcome! Here are your tasks";
    h1.classList.add('text-center')
    const body = document.querySelector('body');
body.appendChild(h1);
    if(tasks){
        tasks = JSON.parse(tasks);
        console.log(tasks)
        for(let task of tasks){
            
            const div = document.createElement('div')
            div.classList.add('task');
            const taskName = document.createElement('p');
            const dueDate = document.createElement('p'); 
            dueDate.textContent = ` Due: ${task.date}`;
            taskName.textContent = task.name;
            const button = document.createElement('button');
            button.textContent = 'Mark as complete'; 
            button.classList.add('btn', 'btn-success');            

            div.appendChild(taskName); 
            div.appendChild(dueDate);
            div.appendChild(button);
            body.appendChild(div);


        }



    }
}




export default printAllTasks;