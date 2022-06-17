import React from 'react'

export const changeStatePokemon = (pokemon) => {

   pokemon.favoriteState = !pokemon.favoriteState;
 

   console.log(pokemon);
     
    return pokemon 

  
}
