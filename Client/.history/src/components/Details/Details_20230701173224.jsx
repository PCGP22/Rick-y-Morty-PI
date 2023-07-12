import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import logo from "../../img/Logo.png"
import './Details.modules.css'

function Details() {
  const {id} = useParams();
  const [character, setCharacter] = useState([])

  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {return res.json()})
    .then((data) => {if (data.name){
      setCharacter([data])} else {
        return(window.alert("No existen datos aún!"))}}
        )
      },[id]
  )

  const pj = {...character[0]}

  return (
    <div className="details__container">
      <img className="details__img" src={pj.image?pj.image:logo} width="500" alt="character profile"/>
      <div className="details__description">
        <p>
          <strong>Id: #</strong>{pj.id? pj.id:"Undefined"}
          <strong> - Name: </strong>{pj.name? pj.name:"Undefined"}
        </p>
        <p><strong>Species: </strong>{pj.species? pj.species:"Undefined"}</p>
        <p><strong>Gender: </strong>{pj.gender? pj.gender:"Undefined"}</p>
        <p><strong>Status: </strong>{pj.status? pj.status:"Undefined"}</p>
        <p><strong>Location: </strong>{pj.location? pj.location.name:"Undefined"}</p>
        <p><strong>Origin: </strong>{pj.origin? pj.origin.name:"Undefined"}</p> 
        <p><strong>Episodes:</strong> {pj.episode? pj.episode.map((e)=><span key={e}>{e.split("/").reverse()[0] + " , "}</span>):"Undefined"}</p>
      </div>  
    </div>
  )
}

export default Details