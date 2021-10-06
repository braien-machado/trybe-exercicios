import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return(
      <div className='pokedex'>
        <h1 className='title'>Pokedex</h1>
        <div className='pokemons'>
          {pokemons.map(pokemon =>
            <Pokemon info={ pokemon } key={ pokemon.name } />)}
        </div>
      </div>
    )
  }
}

export default Pokedex;