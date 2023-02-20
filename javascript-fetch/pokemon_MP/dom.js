const container = document.querySelector("[data-pokemons-container]");

const html = (data) => {
	return `<div class="pokemon__card">
    <div class="pokemon__img"><img src="${data.sprites.front_default}"></div>
    <div class="pokemon__name">${data.name}</div>
    <div class="pokemon__power">Power: ${data.base_experience}</div>
</div>`;
};

export const createItem = (data) => {
	container.innerHTML += html(data);
};
