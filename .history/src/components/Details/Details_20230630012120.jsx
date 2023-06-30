import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.modules.css"
import logo from "../../Banner/Logo.png"

function Details() {
  const {id} = useParams();
  const [character,setCharacter] = useState([])
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {return res.json()})
      .then((data)=> {if(data.name){
      setCharacter([data])
    } else {window.alert("No existen datos aún!")}}
      )
    },[id]);
    const pj = {...character[0]}
    console.log(pj)
  
    
    return (
      <div className='detailsCon'>
        <img src={pj.image?pj.image:logo}/>
          
            <div className='detailsDatos'>

              <p>
                <strong>Id: #</strong>{pj.id? pj.id:"Undefined"}
                <strong> Nombre: </strong>{pj.name? pj.name:"Undefined"}
              </p>
              <p><strong>Species: </strong>{pj.species? pj.species:"Undefined"}</p>
              <p><strong>Gender: </strong>{pj.gender? pj.gender:"Undefined"}</p>
              <p><strong>Status: </strong>{pj.status? pj.status:"Undefined"}</p>
              <p><strong>Location: </strong>{pj.location.name? pj.location.name:"Undefined"}</p>
              <p><strong>Origin: </strong>{pj.origin.name? pj.origin.name:"Undefined"}</p> 
              <p><strong>Episodes:</strong> {pj.episode? pj.episode.map((e)=><span key={e}>{e.slice(-2)}</span>):"Undefined"}</p>
              
            </div>
      
        </div>
   
      )
    }
    
    export default Details