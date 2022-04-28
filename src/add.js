import { list, listItem } from "./iteration.js";
import { getFromLocal, saveLocal } from "./localstorage.js";
export let tasks = getFromLocal('tasks')||[];
export const input = document.createElement("input");

export const addTask = (e) => {
  if (e.key === "Enter") {
    let f = {
      index: tasks.length,
      description: input.value,
      completed: false,
    };

    tasks.push(f);
    saveLocal("tasks", tasks);
    listItem(tasks);
    input.value = "";
  }
};

