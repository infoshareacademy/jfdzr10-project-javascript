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

export const storage = initializeStorage()
