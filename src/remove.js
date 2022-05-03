import { tasks } from './add.js' 
  const listbtn = document.querySelector('.button');
export default listbtn;
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
checkboxChange();
const removeCompleted = () => {
  const newtasks = _.filter(tasks, (o) => !o.completed);
  for (let i = 0; i < newtasks.length; i += 1) {
    newtasks[i].index = i + 1;
  }
  saveLocal('tasks', newtasks);
  reload();
  window.location.reload();
};
removeCompleted();