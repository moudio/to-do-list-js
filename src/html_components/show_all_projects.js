export default function showAllProjects() {
if(!localStorage.getItem('projects')){
    alert('No projects from now')
} else {
const projects = JSON.parse(localStorage.getItem('projects'));
for(let project of projects){
    //Do something
}

}

}