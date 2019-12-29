import addClickEventToSidebar from '../events/add_sidebar_events';
import toggleSidebar from '../functionalities/add_toggle_functionality';
import addClickEventToNav from '../events/add_nav_events'

export default function printNav() {
  const content_wrapper = document.createElement('div');
  content_wrapper.classList.add('page-content-wrapper');

  const nav = document.createElement('nav');

  nav.innerHTML = `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#" class="home-link">Home <span class="sr-only">(current)</span></a>
        </li>
        <div class = "nav-links">
        <li class="nav-item">
          <a class="nav-link" href="#">All Tasks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create Task</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Create Project</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">All Projects</a>
        </li>
        
        
        </div>
        
  
      </ul>
    </div>
  </nav>

</div>
  `;
  content_wrapper.appendChild(nav);
  const appWrapper = document.querySelector('.wrapper');
  appWrapper.appendChild(content_wrapper);



  addClickEventToSidebar();
  addClickEventToNav()
  toggleSidebar();
}
