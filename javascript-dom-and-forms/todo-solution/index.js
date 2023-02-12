import { handleAddTodo, renderTodo } from './scripts/dom.js'
import { storage } from './scripts/storage.js'

const initializeApp = () => {
  const todos = storage.getStore()
  todos.forEach(todo => renderTodo(todo))

  document.querySelector('form').addEventListener('submit', handleAddTodo)
}

document.addEventListener('DOMContentLoaded', initializeApp)
