export default function toggleSidebar() {
    const menu = document.querySelector("#menu-toggle");
    menu.addEventListener('click', function(e){
     e.preventDefault(); 
    
     
    const wrapper = document.querySelector("#wrapper"); 

        if(wrapper.classList.contains("toggled")){
            wrapper.classList.remove("toggled");
        } else {
            wrapper.classList.add("toggled");
        }
    })

}
