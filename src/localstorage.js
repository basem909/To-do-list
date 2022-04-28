import { listItem } from "./iteration";
const saveLocal = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getFromLocal = (key) => {
  const stored = JSON.parse( localStorage.getItem(key))
  let storedTasks = [];
  if (stored) {
    for (let i = 0;i < stored.length ;i += 1) {
      storedTasks.push(stored[i])

    }
  }
  return storedTasks;
}

const reload = () => {
  const store = getFromLocal("tasks");
  listItem(store);
};
export {saveLocal,getFromLocal,reload};