const main = document.querySelector('main');
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const createPokemon = (pokemon) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('card');
  document.body.appendChild(pokemonCard);

  const pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonCard.appendChild(pokemonImg);
  const div = document.createElement('div');
  div.innerHTML = pokemon?.name;
  pokemonCard.appendChild(div);

  
};

async function fetchData(id) {
  const response = await fetch(`${API_URL}/${id}/`);
  const data = await response.json();
  createPokemon(data);
}

const fetchPokemons = (amountOfPokemons) => {
  for (let i = 1; i < amountOfPokemons; i++) {
    fetchData(i);
  }
};

fetchPokemons(40);
