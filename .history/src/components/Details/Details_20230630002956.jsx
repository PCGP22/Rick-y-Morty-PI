import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {id} = useParams();
  const [character,setCharacter] = useState([])
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {return res.json()})
      .then((data)=>setCharacter([data]))
    },[id]);
    const pj = {...character[0]}
  
    
    return (
      <div>
          <button>{character[0].name}</button>
      </div>
      )
    }
    
    export default Details