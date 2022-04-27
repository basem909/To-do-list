import { list, listItem } from "./iteration.js";
export const tasks = [];
export const input = document.createElement("input");

export const addTask = (e) => {
  if (e.key === "Enter") {
    let f = {
      index: tasks.length,
      description: input.value,
      completed: false,
    };

    tasks.push(f);
    console.log(tasks);
    listItem();
    input.value = '';
  }
};
