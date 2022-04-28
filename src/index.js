import './index.css';
import { list } from './iteration.js';
import { addTask, input } from './add.js';
import { reload } from './localstorage.js';

const pageContainer = document.querySelector('.page-container');
const title = document.createElement('h1');
title.textContent = 'Today`s To Do';
pageContainer.appendChild(title);
pageContainer.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'add to your list...');
input.classList.add('input');
pageContainer.appendChild(list);
const remove = document.createElement('a');
remove.setAttribute('href', '#');
remove.textContent = 'Clear all completed';
pageContainer.appendChild(remove);

input.addEventListener('keypress', addTask);

window.addEventListener('load', reload);