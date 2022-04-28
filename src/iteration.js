export const list = document.createElement('ul');
import { tasks } from './add.js';
import { reload, saveLocal } from './localstorage.js';
import { removeTask } from './remove.js';
list.classList.add('todo-container');
export function listItem(tasks) {
  list.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    list.innerHTML += `<li class='list-item'><input type="checkbox"><input class ='edit' placeholder = '${tasks[i].description}' id ='${tasks[i].index}' disabled> <button class = "button"id ='${tasks[i].index}'>remove</button></li>`;

  }
  const listbtn = document.querySelectorAll('.button')
  listbtn.forEach((btn) => {
    btn.addEventListener('click', removeTask);
  });
  const editInput = document.querySelectorAll('.edit');
  const clickTarget = document.querySelectorAll('li');
  clickTarget.forEach((editarea) => {editarea.addEventListener('click',()=>{
    editarea.style.backgroundColor = 'lightyellow'
  editInput.forEach((editput)=>{
    editput.removeAttribute('disabled')
  }) })})

editInput.forEach((editput)=>{
  editput.addEventListener('keypress',(e)=>{
     if (e.key === 'Enter'){
       editput.setAttribute('disabled','')
       clickTarget.forEach((editarea)=>{
         editarea.style.backgroundColor = 'white'
       })
       tasks[e.target.id].description = editput.value
       saveLocal('tasks',tasks)
       reload();
     }
  });
})
  return list;
}
