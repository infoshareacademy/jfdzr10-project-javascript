const pokemonGrid = document.querySelector(".pokemon-grid");
const URL = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemon() {
  const response = await fetch(URL);
  const data = await response.json();
  const pokemon = data.results;

  pokemon.forEach((pokemon) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");

    const pokemonImage = document.createElement("img");
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.url.split("/")[6]
    }.png`;

    const pokemonName = document.createElement("div");
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerText = pokemon.name;

    pokemonElement.appendChild(pokemonImage);
    pokemonElement.appendChild(pokemonName);

    // pokemonElement.addEventListener("click", () => {
    //   console.log(`Kliknięto na kartę pokemona: ${pokemonName}`);
    // });

    pokemonGrid.appendChild(pokemonElement);
  });
}

fetchPokemon();

const URL_POKEMON_INFO = "https://pokeapi.co/api/v2/pokemon/3";

//dodanie addEventListenera na diva z pockemonem
