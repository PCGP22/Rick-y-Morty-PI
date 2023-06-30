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
    console.log(pj)
  
    
    return (
      <div className='detailsCon'>

          <div className='detailsInfo'>
            <img src={pj.image}/>
            <div className='detailsDatos'>

              <p>
                <strong>Id: #</strong>{pj.id}
                <strong> Nombre: </strong>{pj.name}
              </p>
              <p><strong>Species: </strong>{pj.species}</p>
              <p><strong>Gender: </strong>{pj.gender}</p>
              <p><strong>Status: </strong>{pj.status}</p>
              <p><strong>Location: </strong>{pj.location.name}</p>
              <p><strong>Origin: </strong>{pj.origin.name}</p> 
              <p><strong>Episodes:</strong> {pj.episode.map((e)=><span key={e}>{e.slice(-2)}</span>)}</p>
              <p><strong>Origin:</strong> {origin.name}</p>
              
            </div>
      
        </div>

      </div>
      )
    }
    
    export default Details