import { saveLocal, getFromLocal } from './localstorage.js';

const _ = require('lodash');

export const remove = document.createElement('a');
export const list = document.createElement('ul');
list.classList.add('todo-container');
export function listItem(tasks) {
  list.innerHTML = '';
  const reload = () => {
    const store = getFromLocal('tasks');
    listItem(store);
  };
  for (let i = 0; i < tasks.length; i += 1) {
    list.innerHTML += `<li class='list-item'><input id='${
      tasks[i].index
    }' class='check' type="checkbox" ${
      tasks[i].completed ? 'checked' : ''
    } ><input class ='edit' placeholder = '${tasks[i].description}' id ='${
      tasks[i].index
    }' disabled> <button class = "button"id ='${
      tasks[i].index
    }'>remove</button></li>`;
  }
  const listbtn = document.querySelectorAll('.button');
  listbtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tasklist = getFromLocal('tasks');
      tasklist.splice(e.target.id - 1, 1);
      for (let i = 0; i < tasklist.length; i += 1) {
        tasklist[i].index = i + 1;
      }
      saveLocal('tasks', tasklist);
      reload();
      window.location.reload();
    });
  });
  const editInput = document.querySelectorAll('.edit');
  const clickTarget = document.querySelectorAll('li');
  clickTarget.forEach((editarea) => {
    editarea.addEventListener('click', () => {
      editarea.style.backgroundColor = 'lightyellow';
      editInput.forEach((editput) => {
        editput.removeAttribute('disabled');
      });
    });
  });

  editInput.forEach((editput) => {
    editput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        editput.setAttribute('disabled', '');
        clickTarget.forEach((editarea) => {
          editarea.style.backgroundColor = 'white';
        });
        tasks[e.target.id - 1].description = editput.value;
        saveLocal('tasks', tasks);
        reload();
      }
    });
  });

  const check = document.querySelectorAll('.check');
  check.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      if (tasks[e.target.id - 1].completed === false) {
        tasks[e.target.id - 1].completed = true;
        saveLocal('tasks', tasks);
        reload();
      } else {
        tasks[e.target.id - 1].completed = false;
        saveLocal('tasks', tasks);
        reload();
      }
    });
  });
  function del(o) {
    return !o.completed;
  }
  remove.addEventListener('click', () => {
    const newtasks = _.filter(tasks, del(o));
    for (let i = 0; i < newtasks.length; i += 1) {
      newtasks[i].index = i + 1;
    }
    saveLocal('tasks', newtasks);
    reload();
    window.location.reload();
  });
  return list;
}

export const reload = () => {
  const store = getFromLocal('tasks');
  listItem(store);
};
