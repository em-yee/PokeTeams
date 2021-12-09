import React from 'react';

function PokemonTeam({ pokemonTeam }) {
  return (
    <div>
      <ol>
        {pokemonTeam.map((member) => (
          <li>{member}</li>
        ))}
      </ol>
    </div>
  );
}

export default PokemonTeam;
