import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection'; 

function App() {
  const [pokemon, setPokemon] = useState([]);

  // useEffect se lance au chargement de la page.
  useEffect(() => {
    const getPokemons = async() => {
      const resultat = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      const pokemonData = await Promise.all(resultat.data.results.map(async (pokemonItem) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`);
        return response.data;
      }));
      setPokemon(pokemonData);
    }
    getPokemons();
  }, []);
  

  console.log(pokemon);
  return (
    <>
      <h1>Liste de pokémons</h1>
      <PokemonCollection pokemon={pokemon}/>
    </>
  )
}

export default App
