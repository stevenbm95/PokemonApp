import React, {useState,useEffect} from 'react'

export const ListPokemon = ({list}) => {

    
    const [listPokemones, setListPokemones] = useState(list);
    
    useEffect(() => {
        setListPokemones(list);
        
    })
    

    console.log(listPokemones);

  return (

    <div>
        {
        listPokemones.map(p => 
            <li>{p.name}</li>
            
            
            
            )}
    </div>
  )
}
