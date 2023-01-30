import { initializeStore } from "./storage.js";
import { handleAddTodo } from "./dom.js";

document.querySelector("form").addEventListener("submit", handleAddTodo);
document.addEventListener("DOMContentLoaded", initializeStore);
