import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { addFav, removeFav } from "../../Redux/actions.js"
import "./Card.modules.css"


function Card({id, status, name, image, species, onClose, origin, myFavorites, addFav, removeFav}) {
  
  const [isFav, setIsFav] = useState(false)
 
  function handleFavorite() {
    console.log("in")
    if(isFav){
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav({id, status, name, image, species, origin  })
    }
  } 

  useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      })
  }, [myFavorites]);

  return (
    <div className="card__container">
      <button onClick={handleFavorite} className="card__favorite">{isFav?"❤️":"🤍"}</button>
      <div className="card__top">
        <div className={`card__status ${status}`}/>
        <p className="card__id">{`#${id}`}</p>
        <button className="card__button" onClick={()=>{onClose(name); handleFavorite()}}>X</button>
      </div>
        
      <img src={image} className="card__img" alt=''/>
      <p className="card__origin">{origin["name"]}</p>
      <div className="card__description">
        <h3 className="card__title">{name}</h3>
        <p>{species}</p>
      </div>
      <NavLink className={"card__link"} to={`/detail/${id}`} >
            <p><strong>More info</strong></p>
      </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)