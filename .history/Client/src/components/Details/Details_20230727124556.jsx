import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { episodes } from "../../Data/default"
import { addFav, removeFav } from "../../Redux/actions.js"
import { connect } from "react-redux"
import NavBar from "../NavBar/NavBar.jsx"
import logo from "../../img/Logo.png"
import './Details.modules.css'
import axios from "axios"

function Details(props) {
  const {id} = useParams();
  const [character, setCharacter] = useState([]) 
  const [show, setShow] = useState(false)
  const [isFav, setIsFav] = useState(false)

  
  async function fetchData(){
    try{
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name){
        setCharacter([data])
      } else {
        return(window.alert("There's no character that match this ID!"))
      } 
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect( ()=>{
    fetchData()
    },[id]
  )
      
  const pj = {...character[0]}
      

  function handleFavorite() {
    if(isFav){
      setIsFav(false)
      props.removeFav(pj.id)
    } else {
      setIsFav(true)
      props.addFav({id: +pj.id, status: pj.status, name: pj.name, image: pj.image, species: pj.species, origin: pj.origin, gender: pj.gender  })
    }
  }
  
  
  useEffect(() => {
    setIsFav(false);
    props.myFavorites.forEach((fav) => {
      if (fav.id == {id}.id) {
        setIsFav(true);
      }
    })
  }, [pj,myFavorites]);

  return (
    <div className="details__background">
      <NavBar onSearch={props.onSearch} search={true} logout={props.logout}/>
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
        <div className={`details__episodes__container ${show}`}> 
          <p className="details__episodes__title"  onClick={()=>setShow(!show)}><strong>Appearances ▼</strong></p> 
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