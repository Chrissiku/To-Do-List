/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import "./style.css";
import Task from "./modules/task.js";

const tasks = document.querySelector(".task-items");

const refresh = document.querySelector("#refersh");

const addNewTask = document.querySelector("#new-item");
const enter = document.querySelector("#enter");
const enterKey = document.querySelector("#new-item");

let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

// display tasks function
const displayTask = () => {
  tasks.innerHTML = tasksList
    .map(
      (task) => `
      <div id="${task.index}" class="task">
        <div>
            <input id="${task.index}" class="checkbox" type="checkbox" name="checkbox" ${!task.completed ? "" : "checked"} />
            <input id="task" type='text' class=" ${!task.completed ? "" : "checked"} " value="${task.description}" />
        </div>
        <i id="ellips-btn" class="fa-solid fa-ellipsis-vertical ellips hidden"></i>
        <i id="trash" class="fa-solid fa-trash trash"></i>
    </div>
      `
    )
    .join("");
};

// delete task function
const deleteTask = (e) => {
  const item = e.target;
  if (item.classList.contains("fa-trash")) {
    const removeParent = item.parentElement;
    removeParent.remove();
    const newTaskList = tasksList.filter(
      (elem) => +elem.index !== +removeParent.id
    );
    const updateTaskList = newTaskList.map((elem, index) => {
      elem.index = index + 1;
      return elem;
    });
    localStorage.setItem("tasks", JSON.stringify(updateTaskList));
    tasksList = updateTaskList;
    displayTask();
  }
};
tasks.addEventListener("click", deleteTask);

// editing task function
tasks.addEventListener("keypress", (event) => {
  if (event.target.type === "text" && event.key === "Enter") {
    const targetedElem = event.target.parentElement.parentElement;
    tasksList.filter((e) => +e.index === +targetedElem.id);
    tasksList[targetedElem.id - 1].description = event.target.value;
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }
});

// referesh on click refereshing button function
refresh.addEventListener("click", () => {
  window.location.reload();
});

// add new task function
const addTask = () => {
  enter.addEventListener("click", () => {
    if (!addNewTask.value) return;
    const index = tasksList.length + 1;
    const description = addNewTask.value;
    let completed;
    tasksList = [...tasksList, new Task(index, description, completed)];
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    displayTask();
    addNewTask.value = "";
  });

  enterKey.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (!addNewTask.value) return;
      const index = tasksList.length + 1;
      const description = addNewTask.value;
      let completed;
      tasksList = [...tasksList, new Task(index, description, completed)];
      localStorage.setItem("tasks", JSON.stringify(tasksList));
      displayTask();
      addNewTask.value = "";
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  displayTask();
  addTask();
});
