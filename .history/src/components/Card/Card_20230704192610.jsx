import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { addFav, removeFav } from "../../Redux/actions"
import "./Card.modules.css"
import { useState } from "react"

function Card({id, status, name,image,species,onClose,origin}) {
  const [isFav, setIsFav] = useState(false)
 
  function handleFavorite(id) {
    if(isFav){
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav(props)
    }
  } 

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);

  return (
    <div className="card__container">
      <div className="card__top">
        <div className={`card__status ${status}`}/>
        <p className="card__id">{`#${id}`}</p>
        <button className="card__button" onClick={()=>onClose(name)}>X</button>
      </div>
      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
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
    addFav: ()=>{dispatch(addFav())},
    removeFav: ()=>{dispatch(removeFav())}
  }
}

const mapStateToProps = state =>{
  return{
    "myFavorites": [...state]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)