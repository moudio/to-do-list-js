import createProject from '../create_project'
export default function printProject(){
    const title = document.createElement('h1');
title.textContent = 'Create A New Project';
title.classList.add('text-center');
  const body = document.querySelector('body'); 

  const appContainer = document.createElement('div')
  appContainer.classList.add('container', 'app-container');
  appContainer.innerHTML = `
  <form>
      <div class="form-group">
        <label for="projectName">Project Name </label>
        <input type="text" class="form-control" id="projectName" placeholder="Enter Task Name" />
      </div>

      <div class="form-group">
        <label for="projectDescription">Description</label>
        <textarea class="form-control rounded-0" id="projectDescription" rows="5"></textarea>
      </div>



      <button type="submit" class="btn btn-primary">Create Project</button>
    </form>
    
  `
  body.appendChild(title);
  body.appendChild(appContainer);
  document.querySelector('form').addEventListener('submit', createProject );
}