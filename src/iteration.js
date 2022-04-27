export const tasks = [];
export const list = document.createElement('ul');
list.classList.add('todo-container');
export function listItem() {
  for (let i = 0; i < tasks.length; i += 1) {
    list.innerHTML += `<li class='list-item'>${tasks[i].dicr}</li>`;
  }
  return list;
}
listItem();
