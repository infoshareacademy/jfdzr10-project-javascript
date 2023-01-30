import { storage } from './storage.js'

/**
 * DOM - Todo content validator
 * @param {string} content
 * @returns {boolean} - indicates if content passes validation
 */
const validator = content => {
  const validatorMessage = document.querySelector('[data-validator]')

  if (content) {
    validatorMessage.className = 'hidden'
    return true
  }

  validatorMessage.className = 'error'
  return false
}

/**
 * DOM - Delete todo handler
 * @param {any} event - Click event
 * @returns {void}
 */
const handleDeleteTodo = e => {
  const todoItem = e.target
  const id = todoItem.dataset.id

  // setTimeout(() => {
  todoItem.remove()
  storage.deleteItem(id)
  // }, 2000)
}

/**
 * DOM - Submit todo handler
 * @param {any} event - Submit event
 * @returns {void}
 */
export const handleAddTodo = e => {
  e.preventDefault()

  const form = e.target
  const value = form.todo.value

  const isValid = validator(value)
  if (!isValid) {
    return
  }

  const todo = {
    id: crypto.randomUUID(),
    value,
  }

  // setTimeout(() => {
  storage.setItem(todo)
  renderTodo(todo)
  form.reset()
  // }, 2000)
}

/**
 * DOM - Render single todo item
 * @param {{id: string; content: string}} todo
 * @returns {void}
 */
export const renderTodo = todo => {
  const todoList = document.querySelector('[data-todos]')

  const todoItem = document.createElement('li')
  todoItem.dataset.id = todo.id
  todoItem.textContent = todo.value

  todoList.appendChild(todoItem)

  todoItem.addEventListener('click', handleDeleteTodo)
}
