import React, { useEffect, useState } from 'react'
import {getPokemons} from '../Helpers/GetPokemons';

export const useFetchPokemon =  () => {

    const [pokemones, setPokemones] = useState([]);

    useEffect( () => {
       getPokemons()
            .then( pokemons =>{
                setPokemones( 
                    pokemons
                     )       
                     
                    });
                    
                },[]);
                
                    
    
    return pokemones; 


}
