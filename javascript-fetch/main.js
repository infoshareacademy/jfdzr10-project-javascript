const pokemonsContainer = document.getElementById("pokemons");

// Pobranie danych o Pokemonach z API PokeAPI
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon, index) => {
      // Pobranie szczegółowych danych o każdym Pokemonie
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          const tr = document.createElement("tr");

          const tdNumber = document.createElement("td");
          tdNumber.textContent = index + 1;
          tr.appendChild(tdNumber);

          const tdName = document.createElement("td");
          tdName.textContent = data.name;
          tr.appendChild(tdName);

          const tdType = document.createElement("td");
          const types = data.types.map((type) => type.type.name).join(", ");
          tdType.textContent = types;
          tr.appendChild(tdType);

          const tdImage = document.createElement("td");
          const img = document.createElement("img");
          img.src = data.sprites.front_default;
          img.alt = data.name;
          tdImage.appendChild(img);
          tr.appendChild(tdImage);

          pokemonsContainer.appendChild(tr);
        });
    });
  });

// ROZMIĄZANIE NR 2

//   .then((data) => {
//     // Przetwarzanie odpowiedzi API i tworzenie elementów HTML
//     const pokemons = data.results;
//     let pokemonHtml = "";

//     for (let i = 0; i < pokemons.length; i += rows) {
//       pokemonHtml += "<tr>";

//       for (let j = 0; j < rows; j++) {
//         const pokemonIndex = i + j;
//         if (pokemonIndex >= pokemons.length) {
//           break;
//         }

//         const pokemon = pokemons[pokemonIndex];
//         const pokemonId = pokemonIndex + 1;
//         const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//         pokemonHtml += `
//             <td>
//               <h2>${pokemon.name}</h2>
//               <img src="${imageUrl}" alt="${pokemon.name}">
//             </td>
//           `;
//       }
//       pokemonHtml += "</tr>";
//     }
//     // Dodawanie wygenerowanych elementów HTML do strony
//     table.innerHTML = pokemonHtml;
//   })
//   .catch((error) => console.error(error));

// ROZWIĄZANIE nr 3
// const pokemonsContainer = document.getElementById("pokemons");

// Pobranie danych o Pokemonach z API PokeAPI
// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((response) => response.json())
//   .then((data) => {
//     data.results.forEach((pokemon, index) => {
//       // Pobranie szczegółowych danych o każdym Pokemonie
//       fetch(pokemon.url)
//         .then((response) => response.json())
//         .then((data) => {
//           const tr = document.createElement("tr");

//           const tdNumber = document.createElement("td");
//           tdNumber.textContent = index + 1;
//           tr.appendChild(tdNumber);

//           const tdName = document.createElement("td");
//           tdName.textContent = data.name;
//           tr.appendChild(tdName);

//           const tdType = document.createElement("td");
//           const types = data.types.map((type) => type.type.name).join(", ");
//           tdType.textContent = types;
//           tr.appendChild(tdType);

//           const tdImage = document.createElement("td");
//           const img = document.createElement("img");
//           img.src = data.sprites.front_default;
//           img.alt = data.name;
//           tdImage.appendChild(img);
//           tr.appendChild(tdImage);

//           pokemonsContainer.appendChild(tr);
//         });
//     });
//   });
