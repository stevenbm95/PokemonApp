import React, {useState, useEffect} from 'react'

//import { getPokemons } from '../../Helpers/GetPokemons';
import { useFetchPokemon } from '../../Hook/useFetchPokemon';
import { FavList } from '../favlist/FavList';
import { ListPokemon } from './ListPokemon';

export const List = () => {  

  const pokemons = useFetchPokemon();

  console.log("pokemons");
  console.log(pokemons);
  
  return (     
    <>
      <h1> Lista de pokemones</h1>
      
        <ListPokemon list={pokemons}/>
       
   </>
  );
}
