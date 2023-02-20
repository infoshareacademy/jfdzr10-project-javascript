import { initializeStore, getStore } from "./modules/storage.js";
import { handleAddTodo, createTodoItem } from "./modules/dom.js";

const initializeApp = () => {
	initializeStore();
	const todos = getStore();
	todos.forEach((todo) => createTodoItem(todo));
	document.querySelector("form").addEventListener("submit", handleAddTodo);
};

document.addEventListener("DOMContentLoaded", initializeApp);
