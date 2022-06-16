import React, {useState,useEffect} from 'react'

export const ListPokemon = ({list}) => {
   
    const [listPokemones, setListPokemones] = useState(list);
    
        useEffect(() => {
          setListPokemones(list);        
          })

    return (
          <div className='container-list-pokemon'>
            <ul className='list-group '>
              {
              listPokemones.map(p => 
                  <li className='list-group-item' key={p.name}>{p.name}</li>
               )}
                  </ul>  
          </div>
        )
}
