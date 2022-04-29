import { tasks } from "./add";
import { reload } from "./iteration";
import { saveLocal } from "./localstorage";

export const checkboxChange = (e) => {
  if (tasks[e.target.id - 1].completed == false) {
    tasks[e.target.id - 1].completed = true;
    saveLocal("tasks", tasks);
    reload();
  } else {
    tasks[e.target.id - 1].completed = false;
    saveLocal("tasks", tasks);
    reload();
  }
};