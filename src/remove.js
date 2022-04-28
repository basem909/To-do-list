import { getFromLocal, saveLocal, reload } from './localstorage.js';

export const removeTask = (e) => {
  const tasklist = getFromLocal('tasks');
  tasklist.splice(e.target.id, 1);
  for (let i = 0; i < tasklist.length; i += 1) {
    tasklist[i].index = i;
  }
  saveLocal('tasks', tasklist);
  reload();
  window.location.reload();
};
export const listbtn = document.querySelector('.button');
