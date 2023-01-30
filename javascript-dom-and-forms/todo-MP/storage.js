export const initializeStore = () => {
	const store = [];
	localStorage.setItem("store", JSON.stringify(store));
};
