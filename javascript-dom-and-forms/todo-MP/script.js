const errorMessage = document.querySelector("span");

const inputValidator = (content) => {
	if (content) {
		errorMessage.classList.add("hidden");
		errorMessage.classList.remove("error");
		return true;
	}
	errorMessage.classList.remove("hidden");
	errorMessage.classList.add("error");
	return false;
};

const createTodoItem = (todo) => {
	const todoList = document.querySelector("#todoList");

	const todoItem = document.createElement("li");
	todoItem.setAttribute("id", todo.id);
	todoItem.textContent = todo.value;

	todoList.appendChild(todoItem);
};

const handleAddTodo = (e) => {
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

	createTodoItem(todo);
	form.reset();
};

document.querySelector("form").addEventListener("submit", handleAddTodo);
