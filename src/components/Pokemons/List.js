import React, {useState,useEffect} from 'react'
import { changeStatePokemon } from '../../Hook/changeStatePokemon';

import { ListFav } from './ListFav';

export const ListPokemon = ({list}) => {
   
    const [listPokemones, setListPokemones] = useState(list);
  //  const [favorite, setFavorite] = useState(list);
        useEffect(() => {
          setListPokemones(list);
          
        },[list])


    return (
          <div className='container-list-pokemon'>
            <ul className='list-group '>
                {
                listPokemones.map(p => 
                    <li className='list-group-item ' 
                        onClick={ () =>{
                              changeStatePokemon(p)
                              }       
                            } 
                        key={p.name}>{p.name}</li>
                        )
                      }

                     
            </ul>  
          </div>
        )
}
