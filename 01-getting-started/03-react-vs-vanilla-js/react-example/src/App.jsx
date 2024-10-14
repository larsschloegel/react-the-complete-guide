import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const limit = 20;

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      const detailedPokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const details = await detailsResponse.json();
          return details;
        })
      );
      setPokemonList((prevList) => [...prevList, ...detailedPokemonList]);
    } catch (error) {
      console.error('Fehler beim Abrufen der Pokémon:', error);
    }
  };

  const loadMorePokemon = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <>
      <header>
        <h1>Build with React</h1>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </header>
      <div id='pokemon-container' className='container'>
      {pokemonList.map((pokemon, index) => (
          <div key={`${pokemon.id}-${index}`} className="pokemon">
            <img
              src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <div className="pokemon-details">
              <h2>{pokemon.id}: {pokemon.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className='buttonSection'>
      <button onClick={loadMorePokemon}>Mehr laden</button>
      </div>
    </>
  )
}

export default App
