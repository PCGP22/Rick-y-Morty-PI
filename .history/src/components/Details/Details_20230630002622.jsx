import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {id} = useParams();
  const [character,setCharacter] = useState([])
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {return res.json()})
      .then((data)=>setCharacter[data])
    },[id]);
  
    
    return (
      <div>
          <p>{character.name}</p>
      </div>
      )
    }
    
    export default Details