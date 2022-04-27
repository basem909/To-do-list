export const list = document.createElement('ul');
import {tasks} from './add.js'
list.classList.add('todo-container');
export function listItem() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i += 1) {
    list.innerHTML += `<li class='list-item'>${tasks[i].description}</li>`;
  }
  return list;
}
listItem();
