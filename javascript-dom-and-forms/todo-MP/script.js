import { initializeStore, getStore } from "./storage.js";
import { handleAddTodo, createTodoItem } from "./dom.js";

const initializeApp = () => {
	initializeStore();
	const todos = getStore();
	todos.forEach((todo) => createTodoItem(todo));
	document.querySelector("form").addEventListener("submit", handleAddTodo);
};

document.addEventListener("DOMContentLoaded", initializeApp);
