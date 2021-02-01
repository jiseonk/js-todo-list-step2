import {$userCreateButton, $userList, $todoInput} from './todoDOM.js';
import {loadUser, userState, newUser} from './components/user.js';
import {todo} from './components/todo.js';

import {getSelectedUserTodo} from './components/todoList.js';


export const app = () => {
  
  loadUser.list();

  $userCreateButton.addEventListener('click', newUser.handler);
  $userList.addEventListener('click', userState.change);
  $userList.addEventListener('click', getSelectedUserTodo);

  $todoInput.addEventListener('keyup', todo.addItem);
}

