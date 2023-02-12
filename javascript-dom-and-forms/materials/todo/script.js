const taskInput = document.getElementById("taskInput");
const errorMessage = document.getElementById("errorMessage");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const addTask = () => {
  if (!taskInput.value) {
    errorMessage.style.display = "";
  } else {
    errorMessage.style.display = "none";
  }
  tasks.push({
    id: Math.random() * 1000,
    value: taskInput.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
