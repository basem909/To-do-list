import { reload } from './iteration.js';
import { getFromLocal, saveLocal } from './localstorage.js';

export const tasks = getFromLocal('tasks') || [];
export const input = document.createElement('input');

export const addTask = (e) => {
  if (e.key === 'Enter') {
    const f = {
      index: tasks.length + 1,
      description: input.value,
      completed: false,
    };

    tasks.push(f);
    saveLocal('tasks', tasks);
    reload();
    input.value = '';
  }
};