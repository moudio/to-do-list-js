export default function printSideBar() {
  const wrapper = document.querySelector('.wrapper');
  const sidebar = document.createElement('div');
  sidebar.classList.add('bg', 'bg-light', 'border-right', 'sidebar-wrapper');
  sidebar.innerHTML = `
    <div class="sidebar-heading">To Do Go </div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action bg-light">All Tasks</a>
      <a href="#" class="list-group-item list-group-item-action bg-light">Create Task</a>
      <a href="#" class="list-group-item list-group-item-action bg-light">Create Project</a>
      <a href="#" class="list-group-item list-group-item-action bg-light">All Projects</a>


  </div>`;
  wrapper.appendChild(sidebar);
}
