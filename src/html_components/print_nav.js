import addEventToNav from "../events/add_nav_events";
import toggleSidebar from "./../functionalities/add_toggle_functionality";
export default function printNav() {
  const content_wrapper = document.createElement("div"); 
  content_wrapper.id = "page-content-wrapper"; 
  
  const nav = document.createElement("nav");

  nav.innerHTML = `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" class="home-link">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
  
      </ul>
    </div>
  </nav>

</div>
  `
  content_wrapper.appendChild(nav);
  const appWrapper = document.querySelector("#wrapper")
  appWrapper.appendChild(content_wrapper);


//   <div class="container-fluid">
//     <h1 class="mt-4">Simple Sidebar</h1>
//     <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
//     <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
//   </div>
// </div>
// <!-- /#page-content-wrapper -->

// </div>`;

   addEventToNav();
  toggleSidebar();
}
