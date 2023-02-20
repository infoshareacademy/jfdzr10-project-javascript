import { addItem, deleteItem } from "./storage.js";

const inputValidator = (content) => {
	const errorMessage = document.querySelector("span");
	if (content) {
		errorMessage.classList.add("hidden");
		errorMessage.classList.remove("error");
		return true;
	}
	errorMessage.classList.remove("hidden");
	errorMessage.classList.add("error");
	return false;
};

const handleDeleteItem = (e) => {
	const todoItem = e.target;
	const todoId = todoItem.id;

	setTimeout(() => {
		todoItem.remove();
		deleteItem(todoId);
	}, 2000);
};

export const handleAddTodo = (e) => {
	e.preventDefault();
	const form = e.target;
	const todoContent = form.todo.value;

	const isValue = inputValidator(todoContent);

	if (!isValue) {
		return;
	}

	const todo = {
		id: crypto.randomUUID(),
		value: todoContent,
	};

	setTimeout(() => {
		createTodoItem(todo);
		addItem(todo);
		form.reset();
	}, 2000);
};

export const createTodoItem = (todo) => {
	const todoList = document.querySelector("#todoList");

	const todoItem = document.createElement("li");
	todoItem.setAttribute("id", todo.id);
	todoItem.textContent = todo.value;

	todoList.appendChild(todoItem);

	todoItem.addEventListener("click", handleDeleteItem);
};
