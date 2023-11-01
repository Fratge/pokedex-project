import React from 'react';

export default function PokemonCollection({ pokemon }) {
  return (
    <div>
      {pokemon.map((pkmn) => (
        <div key={pkmn.name}>{pkmn.name}</div>
      ))}
    </div>
  );
}
