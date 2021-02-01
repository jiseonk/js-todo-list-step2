import {$userCreateButton, $userList, $todoInput} from './todoDOM.js';
import {loadUser, userState, newUser} from './components/user.js';
import {todo} from './components/todo.js';


export const app = () => {
  
  loadUser.list();

  $userCreateButton.addEventListener('click', newUser.handler);
  $userList.addEventListener('click', userState.change);
  $todoInput.addEventListener('keyup', todo.addItem);
}

