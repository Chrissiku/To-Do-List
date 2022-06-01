import "./style.css";
import Image from "./bg2.jpg";
const listContent = document.querySelector("#list");
const tasks = [
  {
    id: 1,
    description: "Hello, this is my task 1",
    completed: true,
  },
  {
    id: 2,
    description: "Hello, this is my task 2",
    completed: false,
  },
  {
    id: 3,
    description: "Hello, this is my task 3",
    completed: true,
  },
  {
    id: 4,
    description: "Hello, this is my task 4",
    completed: false,
  },
  {
    id: 5,
    description: "Hello, this is my task 5",
    completed: true,
  },
  {
    id: 6,
    description: "Hello, this is my task 6",
    completed: false,
  },
  {
    id: 7,
    description: "Hello, this is my task 7",
    completed: false,
  },
  {
    id: 8,
    description: "Hello, this is my task 8",
    completed: false,
  },
].reverse();

const displayList = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const myLoop = listContent.innerHTML;
    let state = "";
    if (tasks[i].completed === true) {
      state = "checked";
    }
    listContent.innerHTML = `
              <li>
                <input type="checkbox" ${state} />
                <p>${tasks[i].description}</p>
                <span>
                  <i id="edit-${tasks[1].id}" class="fa-solid fa-pen-to-square"></i>
                  <i id="delete-${tasks[1].id}" class="fa-solid fa-calendar-xmark"></i>
                </span>
              </li>${myLoop}`;
  }
};

displayList();
