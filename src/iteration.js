export let tasks = [
  { index: 0, dicr: "complete today project", completed: false },
  { index: 1, dicr: "wash the laundry", completed: false },
  { index: 2, dicr: "change the bed sheets", completed: false },
];
export const list = document.createElement("ul");
list.classList.add("todo-container");
export function listItem() {
  for (let i = 0; i < tasks.length; i+= 1) {
    list.innerHTML = list.innerHTML + `<li class='list-item'>${tasks[i].dicr}</li>`;
  }
  return list;
}
listItem();

