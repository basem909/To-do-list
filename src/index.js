import _ from 'lodash';
import './index.css';
import './iteration.js';
import { list } from './iteration.js';


const pageContainer = document.querySelector('.page-container');
const title = document.createElement('h1');
title.textContent = `Today's To Do`;
pageContainer.appendChild(title);
const input = document.createElement('input');
pageContainer.appendChild(input);
input.setAttribute('type','text');
input.setAttribute('placeholder', "add to your list");
pageContainer.appendChild(list);
const remove = document.createElement('a');
remove.setAttribute('href','#');
remove.textContent = 'Clear all completed'
pageContainer.appendChild(remove)