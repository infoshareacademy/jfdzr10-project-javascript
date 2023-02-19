const API_URL = "https://pokeapi.co/api/v2";
const USERS_ENDPOINT = API_URL + "/pokemon";
const pokemonsListElement = document.querySelector("#pokemons");
const numberOfPokemons = document.querySelector("#numberOfPokemons");
const input = document.querySelector("input");

const getPokemon = async (number) => {
  for (let i = 1; i <= number; i++) {
    const response = await fetch(USERS_ENDPOINT + "/" + i);
    const pokemon = await response.json();
    createCard(pokemon);
  }
};
const createCard = (pokemon) => {
  const pokemonBox = document.createElement("div");
  pokemonBox.classList.add("pokemonBox");

  const pokemonName = document.createElement("h3");
  const pokemonImgBox = document.createElement("div");
  pokemonImgBox.classList.add("imgBox");
  const textBox = document.createElement("div");
  const pokemonImg = document.createElement("img");
  const pokemonPower = document.createElement("p");

  pokemonName.innerText = pokemon.name;
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonPower.innerText = "Power: " + pokemon.base_experience;
  pokemonName.innerText = pokemon.name;
  pokemonImgBox.appendChild(pokemonImg);
  pokemonBox.appendChild(pokemonImgBox);
  textBox.appendChild(pokemonName);
  textBox.appendChild(pokemonPower);
  pokemonBox.appendChild(textBox);
  pokemonsListElement.appendChild(pokemonBox);
};

numberOfPokemons.addEventListener("click", () => {
  pokemonsListElement.innerHTML = "";
  getPokemon(input.value);
});
