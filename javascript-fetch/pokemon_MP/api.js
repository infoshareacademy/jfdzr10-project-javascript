import { createItem } from "./dom.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const onSucces = (data) => {
	createItem(data);
};

export const getData = async () => {
	let number = 20;
	for (let i = 1; i <= number; i++) {
		try {
			const reponse = await fetch(API_URL + `${i}/`);
			const data = await reponse.json();
			onSucces(data);
		} catch (error) {
			console.log(error);
		}
	}
};
