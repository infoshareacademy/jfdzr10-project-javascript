const container = document.querySelector(".container");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    const pokemon = data.results.map((result) => ({
      name: result.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        result.url.split("/")[6]
      }.png`,
    }));

    pokemon.forEach((p) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h2");
      name.textContent = p.name;

      const img = document.createElement("img");
      img.src = p.image;

      card.appendChild(name);
      card.appendChild(img);
      container.appendChild(card);
    });
  });

// const main = document.querySelector("main");
// const url = "https://pokeapi.co/api/v2/pokemon";

// // let data;

// const createPokemon = (pokemon) => {
//   const pokemonCard = document.createElement("div");
//   pokemonCard.classList.add("card");
//   document.body.appendChild([pokemonCard]);

//   const pokemonImg = document.createElement("div");
//   pokemonImg.src = pokemon.sprites.front_default;
//   document.body.appendChild([pokemonImg]);
// };

// async function fetchData(id) {
//   const response = await fetch("$url/${id}/");
//   const data = await response.json();
//   createPokemon(data);
// }

// const fetchPokemons = (amountOfPokemons) => {
//   for (let i = 1; i < amountOfPokemons; i++) {
//     fetchData(i);
//   }
// };

// fetchPokemons(1);

//     console.log(data);
//     data.map((item) => {
//       item.name;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// function name(params) {
//   data;
// }

// const tes = () => {
//   fetch("url")
//     .then((response) => response.json())
//     .then((pokemon) => {
//       createPokemon(pokemon);
//     });
// };

// tes();
