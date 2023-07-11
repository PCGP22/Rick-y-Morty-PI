import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { episodes } from "../../Data/default"
import { addFav, removeFav } from "../../Redux/actions.js"
import { connect } from "react-redux"
import NavBar from "../NavBar/NavBar.jsx"
import logo from "../../img/Logo.png"
import './Details.modules.css'

function Details({onSearch, logout}) {
  const {id} = useParams();
  const [character, setCharacter] = useState([]) 
  const [show, setShow] = useState(false)

  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {return res.json()})
    .then((data) => {if (data.name){
      setCharacter([data])} else {
        return(window.alert("No existen datos aún!"))}}
        )
      },[id]
      )
      
    const [isFav, setIsFav] = useState(false)
      
    const pj = {...character[0]}

    function handleFavorite() {
      console.log("in")
      if(isFav){
        setIsFav(false)
        removeFav(pj.id)
      } else {
        setIsFav(true)
        addFav({id: pj.id, status: pj.status, name: pj.name, image: pj.image, species: pj.species, origin: pj.origin  })
      }
    } 
  
  

  return (
    <div className="details__background">
      <NavBar onSearch={onSearch} search={true} logout={logout}/>
      <div className="details__container">
        <div className="details__imgAndButton">
          <img className="details__img" src={pj.image?pj.image:logo} width="500" alt="character profile"/>
          <button onClick={handleFavorite} className="details__favorite">{isFav?"❤️":"🤍"}</button>
        </div>
        <div className="details__description">
          <p className="details__title">
            <strong>{pj.name? pj.name:"Undefined"}</strong>
          </p>
          <p><strong>Species: </strong>{pj.species? pj.species:"Undefined"}</p>
          <p><strong>Gender: </strong>{pj.gender? pj.gender:"Undefined"}</p>
          <p><strong>Status: </strong>{pj.status? pj.status:"Undefined"}</p>
          <p><strong>Location: </strong>{pj.location? pj.location.name:"Undefined"}</p>
          <p><strong>Origin: </strong>{pj.origin? pj.origin.name:"Undefined"}</p> 
          <hr/>
        </div>
        <div className="details__episodes__container"> 
          <p className="details__episodes__title" onClick={()=>setShow(!show)}><strong>Appearances ▼</strong></p> 
          {show && pj.episode?<div className="details__episodes__list">  
              { pj.episode.map((e)=><p key={e}>{e.split("/").reverse()[0] + ": " + episodes[e.split("/").reverse()[0]]}</p>)} 
          </div>
          :""}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>{
  return {
    addFav: (char)=>{dispatch(addFav(char))},
    removeFav: (id)=>{dispatch(removeFav(id))}
  }
} 

const mapStateToProps = state =>{
  return{
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)