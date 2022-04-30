import { tasks } from './add.js';
import { reload } from './iteration.js';
import { saveLocal } from './localstorage.js';

const checkboxChange = (e) => {
  if (tasks[e.target.id - 1].completed === false) {
    tasks[e.target.id - 1].completed = true;
    saveLocal('tasks', tasks);
    reload();
  } else {
    tasks[e.target.id - 1].completed = false;
    saveLocal('tasks', tasks);
    reload();
  }
};
export default checkboxChange;