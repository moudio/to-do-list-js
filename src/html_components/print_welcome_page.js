import printSideBar from './print_sidebar';
import printNav from './print_nav';
import printAllTasks from '../functionalities/show_all_tasks';
export default function welcomePage(){
    printSideBar();
    printNav();
    console.log("yes")
    printAllTasks();
}

