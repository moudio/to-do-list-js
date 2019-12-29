import printSideBar from './print_sidebar';
import printNav from './print_nav';
import createDefaultProject from '../functionalities/create_default_project';
import showProject from '../functionalities/show_one_project';

export default function welcomePage() {
  printSideBar();
  printNav();
  createDefaultProject();
showProject('Default Project')
}
