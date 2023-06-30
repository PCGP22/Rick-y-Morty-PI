import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.modules.css"

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
      <div className='detailsCon'>
        <div className='detailsMain'>
          <div className='detailsInfo'>
          <p>{pj.name}</p>
          <p>{pj.id}</p>

          </div>
        </div>

      </div>
      )
    }
    
    export default Details