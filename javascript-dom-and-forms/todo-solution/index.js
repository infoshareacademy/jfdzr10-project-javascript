/**
 * Storage - Abstraction over Storage API
 * @param {string} key
 * @param {Array<T>} store
 * @returns {{ getStore: () => Array<T>; setItem: (item: T) => void; deleteItem: (id: string) => void; }}
 */
const initializeStorage = (key = 'store', store = []) => {
  const getStore = () => {
    return JSON.parse(localStorage.getItem(key))
  }

  const setItem = item => {
    const store = getStore()
    localStorage.setItem(key, JSON.stringify([...store, item]))
  }

  const deleteItem = id => {
    const store = getStore()
    const filteredStore = store.filter(item => item.id !== id)
    localStorage.setItem(key, JSON.stringify(filteredStore))
  }

  if (!getStore()) {
    localStorage.setItem(key, JSON.stringify(store))
  }

  return {
    getStore,
    setItem,
    deleteItem,
  }
}

const storage = initializeStorage()

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
 * DOM - Render single todo item
 * @param {{id: string; content: string}} todo
 * @returns {void}
 */
const renderTodo = todo => {
  const todoList = document.querySelector('[data-todos]')

  const todoItem = document.createElement('li')
  todoItem.dataset.id = todo.id
  todoItem.textContent = todo.value

  todoList.appendChild(todoItem)

  todoItem.addEventListener('click', () => {
    const id = todoItem.dataset.id

    // setTimeout(() => {
    todoItem.remove()
    storage.deleteItem(id)
    // }, 2000)
  })
}

/**
 * DOM - Submit todo handler
 * @param {any} event - Submit event
 * @returns {void}
 */
const addTodo = e => {
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

const initializeApp = () => {
  const todos = storage.getStore()
  todos.forEach(todo => renderTodo(todo))
}

document.querySelector('form').addEventListener('submit', addTodo)
document.addEventListener('DOMContentLoaded', initializeApp)
