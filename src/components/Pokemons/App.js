import { useState } from 'react';
import '../../App.css';
import { useFetchPokemon } from '../../Hook/useFetchPokemon';
import { ListPokemon } from './List';


function PokemonApp() {

  const pokemons = useFetchPokemon();

  return ( 
    <>
      <h1> Lista de pokemones</h1>
          
      <ListPokemon list={pokemons}/>
    </>
  
  )
 
}

export default PokemonApp;
