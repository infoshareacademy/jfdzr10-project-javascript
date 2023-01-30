const store = [];
export const initializeStore = () => {
	if (!getStore()) {
		localStorage.setItem("store", JSON.stringify(store));
	}
};

export const getStore = () => {
	return JSON.parse(localStorage.getItem("store"));
};

export const addItem = (item) => {
	const store = getStore();
	localStorage.setItem("store", JSON.stringify([...store, item]));
};

export const deleteItem = (id) => {
	const store = getStore();
	const filteredStore = store.filter((item) => item.id !== id);
	localStorage.setItem("store", JSON.stringify(filteredStore));
};
