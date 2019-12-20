import addEventToNav from '../events/add_nav_events';

export default function printNav() { 
const body = document.querySelector('body');
const nav = document.createElement('nav'); 

nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">To Do Go</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item ">
      <a class="nav-link" href="#" >Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">New Task</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Projects
      </a>

      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">New Project</a>
        <a class="dropdown-item" href="#">All Your Projects </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  
  </ul>
</div>
</nav>`

body.appendChild(nav);
addEventToNav();


}