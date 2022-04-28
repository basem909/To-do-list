export const list = document.createElement("ul");
import { tasks } from "./add.js";
list.classList.add("todo-container");
export function listItem(tasks) {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i += 1) {
    list.innerHTML += `<li class='list-item'><input type="checkbox">${tasks[i].description}<button class = "button"id ='${tasks[i].index}'>remove</button></li>`;

  }

  return list;
}
