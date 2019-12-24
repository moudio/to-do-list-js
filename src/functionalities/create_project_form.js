import createProject from "./create_project";
export default function printProject() {
  const title = document.createElement("h1");
  title.textContent = "Create A New Project";
  title.classList.add("text-center");
  const appContainer = document.querySelector(".app");
  appContainer.innerHTML = `
  <form>
      <div class="form-group">
        <label for="projectName">Project Name </label>
        <input type="text" class="form-control" id="projectName" placeholder="Enter Task Name" />
      </div>

      <button type="submit" class="btn btn-primary">Create Project</button>
    </form>
    
  `;

  appContainer.prepend(title);
  console.log(appContainer);

  document.querySelector("form").addEventListener("submit", createProject);
}
