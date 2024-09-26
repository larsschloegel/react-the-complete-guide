let offset = 0;
const limit = 20;

function fetchPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayPokemon(data.results);
    })
    .catch(error => {
      console.error('Fehler beim Abrufen der Pokémon:', error);
    });
}

function displayPokemon(pokemonList) {
  const container = document.getElementById('pokemon-container');

  pokemonList.forEach(pokemon => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');

    fetch(pokemon.url)
      .then(response => response.json())
      .then(details => {
        pokemonDiv.innerHTML = `
        <img src="${details.sprites.other?.['official-artwork']?.front_default}" alt="${details.name}" onerror="this.src='${details.sprites.front_default}';">
        <div class="pokemon-details">
          <h2>${details.name}</h2>
          <p>ID: ${details.id}</p>
        </div>
      `;

        container.appendChild(pokemonDiv);
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Pokémon-Details:', error);
      });
  });
}

document.getElementById('load-more').addEventListener('click', () => {
  offset += limit;
  fetchPokemon();
});

window.onload = fetchPokemon;
