import "./index.css";
import { list, listItem } from "./iteration.js";
import { addTask, input, tasks } from "./add.js";
import { getFromLocal, reload } from "./localstorage";
import { listbtn } from "./remove";

const pageContainer = document.querySelector(".page-container");
const title = document.createElement("h1");
title.textContent = "Today's To Do";
pageContainer.appendChild(title);
pageContainer.appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("placeholder", "add to your list...");
pageContainer.appendChild(list);
const remove = document.createElement("a");
remove.setAttribute("href", "#");
remove.textContent = "Clear all completed";
pageContainer.appendChild(remove);

input.addEventListener("keypress", addTask);

window.addEventListener('load', reload)

